import fs from "node:fs";
import path from "node:path";
import puppeteer from "/tmp/pptr/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js";

const root = "/workspace/public";
const outDir = path.join(root, "print");
const previewDir = path.join(outDir, "previews");
fs.mkdirSync(previewDir, { recursive: true });

const jobs = [
  {
    file: "a5-semya.html",
    pdf: "listovka-a5-semya.pdf",
    preview: "listovka-a5-semya",
    width: 148,
    height: 210,
    pages: 2,
  },
  {
    file: "a5-biznes.html",
    pdf: "listovka-a5-biznes.pdf",
    preview: "listovka-a5-biznes",
    width: 148,
    height: 210,
    pages: 2,
  },
  {
    file: "a4.html",
    pdf: "listovka-a4.pdf",
    preview: "listovka-a4",
    width: 210,
    height: 297,
    pages: 1,
  },
  {
    file: "buklet.html",
    pdf: "buklet-a4.pdf",
    preview: "buklet-a4",
    width: 297,
    height: 210,
    pages: 2,
  },
];

const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: true,
  timeout: 30000,
  args: [
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--hide-scrollbars",
    "--font-render-hinting=none",
    "--user-data-dir=/tmp/chrome-print",
  ],
});

const px = (mm) => Math.round((mm * 96) / 25.4);

for (const job of jobs) {
  const page = await browser.newPage();
  page.setDefaultTimeout(30000);
  await page.setViewport({
    width: px(job.width),
    height: px(job.height) * job.pages,
    deviceScaleFactor: 2,
  });
  await page.goto(`http://127.0.0.1:43123/print-kit/${job.file}`, {
    waitUntil: "networkidle0",
  });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(async () => {
    await Promise.all(
      [...document.images].map((img) =>
        img.complete
          ? null
          : new Promise((resolve) => {
              img.onload = img.onerror = resolve;
            })
      )
    );
  });
  await new Promise((r) => setTimeout(r, 400));

  const pdfPath = path.join(outDir, job.pdf);
  await page.pdf({
    path: pdfPath,
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  const sheets = await page.$$(".sheet");
  for (let i = 0; i < sheets.length; i += 1) {
    await sheets[i].screenshot({
      path: path.join(previewDir, `${job.preview}-${i + 1}.png`),
      type: "png",
    });
  }
  console.log("ok", job.pdf);
  await page.close();
}

await browser.close();
console.log("all print files ready");
