const fs = require('fs');
const blink = require('blink-diff');

describe('webdriver.io page', () => {

    afterEach(async function () {
        const newFileName = '_new.png';
        const oldFileName = '_old.png';
        const difFileName = '_dif.png';

        const reportsPath='reports/';
        const testName=this.currentTest.title.replace(/\s/g,'_');
        const testPath=reportsPath+testName+'/';

        const newScreenshotName = testPath+testName+newFileName;
        const oldScreenshotName = testPath+testName+oldFileName;
        const difScreenshotName = testPath+testName+difFileName;

        //create test folder        
        if (!fs.existsSync(testPath)){
            fs.mkdirSync(testPath, { recursive: true });
        }

        //rename existing screenshot to old one
        if (fs.existsSync(newScreenshotName)){
            fs.renameSync(newScreenshotName, oldScreenshotName);
        }

        //save current screenshot
        browser.saveScreenshot(newScreenshotName)
        .then(()=>{        
            //compare new screen with old one and create diff 
            if (fs.existsSync(newScreenshotName) && fs.existsSync(oldScreenshotName)) {
                const diff = new blink({
                    imageAPath: newScreenshotName,
                    imageBPath: oldScreenshotName,
                    thresholdType: blink.THRESHOLD_PERCENT,
                    threshold: 0.01, // 1% threshold
                    imageOutputPath: difScreenshotName
                });

                diff.log = function (text) {
                    console.error('diff log', text);
                };
                
                diff.run(function (error, result) {
                    if (error) {
                        throw error;
                    } else {
                        console.log(diff.hasPassed(result.code) ? 'Passed' : 'Failed');
                        console.log('Found ' + result.differences + ' differences.');
                    }
                });
            }
        }) 
    })

    it('TC01 should have the right title of webdriver.io', () => {
        browser.url('https://webdriver.io')
        //const title = browser.getTitle()
        //assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
    it('TC02 should have the right title of google.com', () => {
        browser.url('https://google.com/search?q=casa')
    })
    it('TC03 should have the right title of bbc.com', () => {
        browser.url('https://bbc.com')
    })      
})
