const webdriver = require('selenium-webdriver');
const driver = new webdriver.Builder()
    .forBrowser('chrome').build();
const assert = require('assert');
const chatPage = require('./pages/ChatPage')(driver);

describe('src/component', () => {
    beforeEach(() => chatPage.navigate());
    it('should set username', function () {
        const userName = 'shahar';
        chatPage.enterName(userName);
        chatPage.getName().then(name => assert.equal(name, userName));
    });
    it('should submit message', function () {
        const userName = 'shahar';
        chatPage.enterName(userName);
        assert.doesNotThrow(
            () => {
                chatPage.sendMessage('hey it me');
            });
    });

});