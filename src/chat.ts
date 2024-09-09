import axios from "axios";
import fs from "fs";
import path from "path";
import { Builder, By, until, logging } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";
// Zoom API credentials
// const ZOOM_ACCOUNT_ID = "";
// const ZOOM_CLIENT_ID = "";
// const ZOOM_CLIENT_SECRET = "";

// The grant_type is included in the URL
// const tokenUrl = `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${ZOOM_ACCOUNT_ID}`;
// const authString = Buffer.from(
//   `${ZOOM_CLIENT_ID}:${ZOOM_CLIENT_SECRET}`
// ).toString("base64");

async function downloadAndProcessFile(url: string, pass: string) {
  // const meetingId = "MEETINGID";

  (async () => {
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

      

    let emailAddresses: string[] | null = [];

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
      fs.writeFileSync("logs.json", JSON.stringify(logs, null, 2));
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

      // Optionally, wait and monitor the download directory
      setTimeout(() => {
        fs.readdir(downloadPath, (err, files) => {
          if (err) {
            return emailAddresses;
          }

          if (files.length === 0) {
          } else {
            files.forEach((file) => {
              const fileContent = fs.readFileSync(
                path.join(downloadPath, file),
                "utf-8"
              );

              emailAddresses = fileContent.match(
                /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g
              );
              if (emailAddresses) {
                fs.unlinkSync(path.join(downloadPath, file));
              }
            });
          }
        });

        // Close the browser after 30 seconds
        setTimeout(async () => {
          await driver.quit();
          return emailAddresses;
        }, 30000);
      }, 30000); // Adjust the timeout based on your needs
    } catch (err) {
      return emailAddresses;
    }
  })();
}

// axios
//   .post(tokenUrl, null, {
//     headers: {
//       Authorization: `Basic ${authString}`,
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   })
//   .then((res) => {
//     const accessToken = res.data.access_token;
//     axios
//       .get(
//         `https://api.zoom.us/v2/meetings/6k1W586RRvCxVteiL4+Dfg==/recordings?file_type=chat`,
//         {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         }
//       )
//       .then(async (res) => {
//         const recordingFiles = res.data.recording_files;
//         const txtFile = recordingFiles.find(
//           (file: any) => file.file_extension === "TXT"
//         );

//         if (txtFile) {
//           const downloadUrl = txtFile.download_url;
//           const password = res.data.password;
//           const result = await downloadAndProcessFile(downloadUrl, password);
//           console.log(result);
//         } else {
//           console.log("TXT file not found.");
//         }
//       });
//   })
//   .catch((err) => {
//     console.error("Error fetching access token:", err);
//   });

export const getEmails = async (meetingId: string, access_token: string) => {
  axios
    .get(
      `https://api.zoom.us/v2/meetings/${meetingId}/recordings?file_type=chat`,
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    )
    .then(async (res) => {
      const recordingFiles = res.data.recording_files;
      const txtFile = recordingFiles.find(
        (file: any) => file.file_extension === "TXT"
      );
      if (txtFile) {
        const downloadUrl = txtFile.download_url;
        const password = res.data.password;
        const emailAddresses = await downloadAndProcessFile(
          downloadUrl,
          password
        );
        console.log(emailAddresses);
        return emailAddresses;
      } else {
        return [];
      }
    });
};
