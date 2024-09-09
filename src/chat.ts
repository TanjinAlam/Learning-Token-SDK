import axios from "axios";
import fs from "fs";
import path from "path";
import { Builder, By, until, logging } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";

async function downloadAndProcessFile(url: string, pass: string): Promise<string[] | null> {
  const downloadPath = path.resolve(__dirname, "downloads");

  if (!fs.existsSync(downloadPath)) {
    fs.mkdirSync(downloadPath);
  }

  // Configure Chrome to use a specific download directory and enable performance logging
  const chromeOptions = new chrome.Options();
  chromeOptions.setUserPreferences({
    "download.default_directory": downloadPath,
    "safebrowsing.enabled": true,
  });

  chromeOptions.addArguments("--headless=new");
  // Enable performance logging
  chromeOptions.set("goog:loggingPrefs", { performance: "ALL" });

  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();

  let emailAddresses: string[] | null = null;

  try {
    // Navigate to the Zoom download page
    await driver.get(url);

    // Wait for the passcode input to be visible and enter the passcode
    const passcodeInput = await driver.wait(
      until.elementLocated(By.id("passcode")),
      90000
    );
    await passcodeInput.sendKeys(pass);

    // Click the submit button
    const submitButton = await driver.findElement(By.id("passcode_btn"));
    await submitButton.click();

    // Monitor network requests for the file download
    const logs = await driver.manage().logs().get(logging.Type.PERFORMANCE);
    
    for (let logEntry of logs) {
      const message = JSON.parse(logEntry.message).message;
      if (
        message.method === "Network.responseReceived" &&
        message.params.response.status === 200
      ) {
        const downloadUrl = message.params.response.url;
        if (downloadUrl.includes("rec/download")) {
        }
      }
    }

    // Wait for a reasonable time to allow file download (adjust as needed)
    await new Promise((resolve) => setTimeout(resolve, 30000));

    // Check the download directory and process the file
    const files = fs.readdirSync(downloadPath);

    if (files.length > 0) {
      files.forEach((file) => {
        const fileContent = fs.readFileSync(
          path.join(downloadPath, file),
          "utf-8"
        );

        emailAddresses = fileContent.match(
          /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g
        );

        // Delete the file after processing
        fs.unlinkSync(path.join(downloadPath, file));
      });
    }

    // Return the email addresses found (or null if none)
    return emailAddresses;
  } catch (err) {
    return null;
  } finally {
    // Ensure the browser is closed after processing
    await driver.quit();
  }
}



export const getEmails = async (meetingId: string, access_token: string) => {
  try {
    const res = await axios.get(
      `https://api.zoom.us/v2/meetings/${meetingId}/recordings?file_type=chat`,
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );

    const recordingFiles = res.data.recording_files;
    const txtFile = recordingFiles.find(
      (file: any) => file.file_extension === "TXT"
    );

    if (txtFile) {
      const downloadUrl = txtFile.download_url;
      const password = res.data.password;
      const emailAddresses = await downloadAndProcessFile(downloadUrl, password);
      return emailAddresses; // Correctly return the value here
    } else {
      return [];
    }
  } catch (err) {
    console.error(err);
    return []; // Return an empty array or handle error accordingly
  }
};

