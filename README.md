# Installation

Clone the repo

```sh
git clone git@github.com:DonVit/visual-regression.git
```

Run installation

```sh
npm i
```

Run setup

```sh
npm run setup
```

Run tests

```sh
npm run test
```

Notes:

If tests running fails with the bellow error

```
ERROR webdriver: Request failed due to session not created: session not created: This version of ChromeDriver only supports Chrome version 77
```

Then check what Chrome version you have on your machine and install the coresponding ChromeDriver.

In my case it failed because i used Chrome version 74 (I couldnt update to 77 becasue i have not rights to udpate Chrome)

So i had to install the required Chrome Driver like below:

```sh
npm i chromedriver@74
```
