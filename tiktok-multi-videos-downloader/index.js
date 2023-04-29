const puppeteer = require('puppeteer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const downloadVideo = async (url) => {
  let fullUrl = url;

  if (url.includes('vt.tiktok.com')) {
    // If the URL is a shortened URL, navigate to the page and get the full URL
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {timeout: 60000});
    fullUrl = await page.url();
    await browser.close();
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto('https://snaptik.app/', {timeout: 60000});
    await page.type('input[name="url"]', url);
    await page.click('[type="submit"].button-go');
    await page.waitForSelector('a.download-file', {timeout: 60000});

    console.log(`Downloading ${fullUrl} video...`);

    const downloadLink = await page.$eval('a.download-file', link => link.href);
    const response = await axios({
      url: downloadLink,
      method: 'GET',
      responseType: 'stream'
    });

    const usernameMatch = fullUrl.match(/@([a-zA-Z0-9_.-]+)/);
    const username = usernameMatch ? usernameMatch[1] : 'unknown';
    let fileName = `${username}.mp4`;

    // check if file with the same name already exists, if so, add a counter to the filename
    let counter = 1;
    while (fs.existsSync(`videos/${fileName}`)) {
      fileName = `${username}(${counter}).mp4`;
      counter++;
    }

    const writer = fs.createWriteStream(`videos/${fileName}`);

    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on('finish', resolve)
      writer.on('error', reject)
    });

    console.log(`Download ${fullUrl} video success!`);

  } catch (error) {
    console.error(error);
  } finally {
    await browser.close();
  }
};

rl.question('Enter video links: ', (linkVideo) => {
  const linkArray = linkVideo.split(',');
  linkArray.forEach(url => downloadVideo(url));
  rl.close();
});


