const puppeteer = require("puppeteer");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const whatsapp = require("./whatsapp");
const { default: mongoose } = require("mongoose");
const Friend = require("./db/friends.model");
dotenv.config({ path: "./.env" });

(async function () {
  const browser = await puppeteer.launch({
    args: [
      "--disable-setuid-sandbox",
      "--no-sandbox",
      "--single-process",
      "--no-zygote",
    ],
    executablePath:
      process.env.NODE_ENV === "production"
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath(),
  });
  const page = await browser.newPage();
  await page.goto("https://ioit.akronsystems.com/pLogin.aspx");

  await page.type("#txtUSERNAME", process.env.id);
  await page.type("#txtPASSWORD", process.env.password);
  await page.click("#btnSUBMIT");

  await page.waitForNavigation();
  await page.waitForSelector(".birthName");

  const birthNames = await page.evaluate(() => {
    const names = [];
    const todaySection = document.querySelector(
      ".d_birthdayW h2:first-of-type"
    );
    if (todaySection.textContent.trim() === "Today") {
      const studentRows =
        todaySection.nextElementSibling.querySelectorAll("tr");
      studentRows.forEach((row) => {
        const department = row
          .querySelector(".d_birthRight span")
          .textContent.trim();
        if (department === "SY BTech - Information Techonology") {
          const name = row.querySelector(".birthName").textContent.trim();
          names.push(name);
        }
      });
    }
    return names;
  });

  birthNames.forEach((name) => {
    connectDB().then(async () => {
      try {
        const result = await Friend.findOne({
          Full: name,
        });
        whatsapp(result?.Message);
      } catch (err) {
        console.log(err);
      }
    });
  });

  await browser.close();
})();
