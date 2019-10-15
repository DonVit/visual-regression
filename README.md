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

Run tests 2 times to see screenshot diffs

```sh
npm run test
```

Check diff images in `reports` folder below

```sh
+---TC01_should_have_the_right_title_of_webdriver.io
|       TC01_should_have_the_right_title_of_webdriver.io_dif.png
|       TC01_should_have_the_right_title_of_webdriver.io_new.png
|       TC01_should_have_the_right_title_of_webdriver.io_old.png
|
+---TC02_should_have_the_right_title_of_google.com
|       TC02_should_have_the_right_title_of_google.com_dif.png
|       TC02_should_have_the_right_title_of_google.com_new.png
|       TC02_should_have_the_right_title_of_google.com_old.png
|
\---TC03_should_have_the_right_title_of_bbc.com
        TC03_should_have_the_right_title_of_bbc.com_new.png
        TC03_should_have_the_right_title_of_bbc.com_old.png
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
