const { Builder, By, until, logging } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');
const path = require('path');

const url = 'https://us06web.zoom.us/rec/download/llOU71tX_Pr7KrBlECkV7pzPBTFRRpwX_Dv8iWjTXHx7eO0xAPC6UBn69NPOWLoX4Ou6FsDVwboXgJcn.e2skS_R9NvdrcCKq';
const pass = '3.E+v2VQ';

(async () => {
  const downloadPath = path.resolve(__dirname, 'downloads');

  if (!fs.existsSync(downloadPath)) {
    fs.mkdirSync(downloadPath);
  }

  // Configure Chrome to use a specific download directory and enable performance logging
  const chromeOptions = new chrome.Options();
  chromeOptions.setUserPreferences({
    'download.default_directory': downloadPath,
    'safebrowsing.enabled': true,
  });
  
  // Enable performance logging
  chromeOptions.set('goog:loggingPrefs', { performance: 'ALL' });

  // Launch the Chrome browser
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    .build();

  try {
    // Navigate to the Zoom download page
    await driver.get(url);

    // Wait for the passcode input to be visible and enter the passcode
    const passcodeInput = await driver.wait(until.elementLocated(By.id('passcode')), 40000);
    await passcodeInput.sendKeys(pass);

    // Click the submit button
    const submitButton = await driver.findElement(By.id('passcode_btn'));
    await submitButton.click();

    // Monitor network requests for the file download
    const logs = await driver.manage().logs().get(logging.Type.PERFORMANCE);
    fs.writeFileSync('logs.json', JSON.stringify(logs, null, 2));    
    for (let logEntry of logs) {
      const message = JSON.parse(logEntry.message).message;
      if (message.method === 'Network.responseReceived' && message.params.response.status === 200) {
        const downloadUrl = message.params.response.url;
        if (downloadUrl.includes('rec/download')) {
          console.log('Download URL:', downloadUrl);
        }
      }
    }

    // Optionally, wait and monitor the download directory
    setTimeout(() => {
      fs.readdir(downloadPath, (err, files) => {
        if (err) {
          console.error('Error reading downloads directory:', err);
          return;
        }

        if (files.length === 0) {
          console.log('No files downloaded.');
        } else {
          files.forEach(file => {
            console.log('Downloaded file:', file);
          });
        }
      });
    }, 30000); // Adjust the timeout based on your needs
  } catch (err) {
    console.error('An error occurred:', err);
  } finally {
    // Close the browser
    await driver.quit();
  }
})();
