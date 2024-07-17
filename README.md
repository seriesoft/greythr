# Greythr automation

This app was created to ease the daily login process of Greythr. It is written in Node.js and Playwright.

## Dependencies

- Node.js
- Playwright

## Installation

Clone the repository and run the following commands:

- `npm install`
- `npx playwright install`

## Working

Basically, we are using playwright which is an end-to-end testing framework for web automation. Before running the app you have to configure it according to your organization.

So the first thing is to make sure you have an greythr account provided by an organization.

Secondly, you have to configure the app by setting the `HOMEPAGE_URL`, `LOGOUT_URL`, `UNAME` and `PWD` in `commons/constants.js`.

Then your HOMEPAGE_URL is `https://companyname.greythr.com/`, LOGOUT_URL is `https://companyname.greythr.com/uas/portal/auth/logout`, UNAME is `username` and PWD is `password`. Now replace them with your actual values.

## Usage

- Run `npm run signIn` to login to Greythr and you will see that chromium window will open and you will be logged in and finally it will close the window automatically.

- Similar to signIn, Run `npm run signOut` to logout of Greythr
