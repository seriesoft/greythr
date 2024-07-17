const CONSTANTS = module.exports;
CONSTANTS.HOMEPAGE_URL = "https://companyname.greythr.com/";

CONSTANTS.LOGOUT_URL = "https://companyname.greythr.com/uas/portal/auth/logout";

CONSTANTS.LAUNCH_OPTIONS = {
  launchOptions: {
    slowMo: 1500,
  },
};

CONSTANTS.LOCATORS = {
  UNAME: "#username",
  PWD: "#password",
  LOGIN_BTN: "text=Log in",
  LOGOUT_BTN: ".image-gt-icon-logout",
  SIGN_OUT: "text=Sign Out",
  SIGN_IN: 'button:has-text("Sign In")',
};

CONSTANTS.ESSENTIALS = {
  UNAME: "username",
  PWD: "password",
};
