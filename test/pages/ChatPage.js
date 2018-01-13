const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

module.exports = (driver) => {
    const elements = {
        avatarImage: By.id('avatar'),
        userNameInput: By.id('userName'),
        submitMessageButton: By.id('submitMessage'),
        userMessageInput: By.id('userMessage'),
        ownerMessage: By.css('.ownerMessage'),
        newMessage: By.css('.chatMessage')
    };
    return {
        url: 'http://localhost:3000/',
        elements: elements,
        navigate: () => {
            driver.navigate().to(this.url);
            return until.elementLocated((elements.userNameInput));
        },
        enterName: (name) => {
            driver.findElement(elements.userNameInput).sendKeys(name);
        },
        sendMessage: (message) => {
            if (elements.userNameInput.value === '') return new Error('userName input was empty, cannot send message without userName');
            driver.findElement(elements.userMessageInput).sendKeys(message);
            driver.wait(until.elementIsEnabled(elements.submitMessageButton));
            driver.findElement(elements.submitMessageButton).click();
        },
        getName: () => driver.findElement(elements.userNameInput).getAttribute('value')
    }
};