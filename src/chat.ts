// const axios = require("axios");
// const puppeteer = require("puppeteer");

import axios from "axios";
import puppeteer from "puppeteer";

// Zoom API credentials
const ZOOM_ACCOUNT_ID = "jhDLkKe-RJqw1vD47uwb_w";
const ZOOM_CLIENT_ID = "bRBgBSlHRTO8i7YPFcwBfw";
const ZOOM_CLIENT_SECRET = "ta9IM3h5y6rStE5UgVFKxD1DS9O5Z50A";

// The grant_type is included in the URL
const tokenUrl = `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${ZOOM_ACCOUNT_ID}`;
const authString = Buffer.from(`${ZOOM_CLIENT_ID}:${ZOOM_CLIENT_SECRET}`).toString("base64");

async function downloadAndProcessFile(downloadUrl, password) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(downloadUrl);

  // Enter the password and submit the form
  await page.type('input[type="password"]', password);
  await page.click('button[type="button"]');

  // Wait for the download link to appear and click it
  await page.waitForSelector('a[download]', { visible: true });
  const [downloadButton] = await page.$x('//a[contains(text(), "Download")]');
  const href = await downloadButton.evaluate(el => el.href);

  // Fetch the file contents
  const response = await axios.get(href);
  const fileContent = response.data;

  // Close the browser
  await browser.close();

  // Perform the regex operation on the file content
  const regexPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  const matches = fileContent.match(regexPattern);

  console.log("Extracted Emails:", matches);
}

axios
  .post(tokenUrl, null, {
    headers: {
      Authorization: `Basic ${authString}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
  .then((res) => {
    const accessToken = res.data.access_token;
    axios
      .get(`https://api.zoom.us/v2/meetings/6k1W586RRvCxVteiL4+Dfg==/recordings?file_type=chat`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(async (res) => {
        const recordingFiles = res.data.recording_files;
        const txtFile = recordingFiles.find(file => file.file_extension === 'TXT');
        
        if (txtFile) {
          const downloadUrl = txtFile.download_url;
          const password = res.data.password;
          console.log(password);
          await downloadAndProcessFile(downloadUrl, password);
        } else {
          console.log("TXT file not found.");
        }
      });
  })
  .catch((err) => {
    console.error("Error fetching access token:", err);
  });
