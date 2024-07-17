const { test, expect } = require("@playwright/test");
const CONSTANTS = require("../commons/constants");

const { HOMEPAGE_URL, LOGOUT_URL, LAUNCH_OPTIONS, LOCATORS, ESSENTIALS } =
  CONSTANTS;

const logout = async (page) => {
  await page.locator(LOCATORS.LOGOUT_BTN).click();
};

test.beforeEach(async ({ page }, testInfo) => {
  test.setTimeout(testInfo.timeout + 300000);
  console.log("Extended timeout for this test");
});

test.use(LAUNCH_OPTIONS);

test("sOut", async ({ page }) => {
  await page.goto(HOMEPAGE_URL);

  const uLocator = page.locator(LOCATORS.UNAME);
  await expect(uLocator).toBeEditable();
  await page.fill(LOCATORS.UNAME, ESSENTIALS.UNAME);

  const pLocator = page.locator(LOCATORS.PWD);
  await expect(pLocator).toBeEditable();
  await page.fill(LOCATORS.PWD, ESSENTIALS.PWD);

  const lLocator = page.locator(LOCATORS.LOGIN_BTN);
  await expect(lLocator).toBeEnabled();
  await lLocator.click();

  await page.waitForTimeout(5000);

  const sOutLocator = page.locator(LOCATORS.SIGN_OUT);
  await expect(sOutLocator).toBeEnabled();
  await sOutLocator.click();

  await page.waitForTimeout(2000);

  await logout(page);

  await page.waitForTimeout(2000);

  let pageUrl = page.url();

  await expect(pageUrl).toEqual(LOGOUT_URL);

  await page.waitForTimeout(5000);
});

test.afterEach(async ({ page }) => {
  console.log("sOut after each", page.url());
  if (page.url() !== LOGOUT_URL) {
    await logout(page);
  }
  await page.close();
});
