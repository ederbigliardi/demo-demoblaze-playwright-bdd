const { setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('playwright');

setDefaultTimeout(60 * 1000);

class CustomWorld {
    constructor() {
        this.browser = null;
        this.context = null;
        this.page = null;
    }

    async launch(browserName = process.env.BROWSER || 'chromium') {
        const engines = { chromium, firefox, webkit };
        const engine = engines[browserName] || chromium;

        this.browser = await engine.launch({ headless: process.env.HEADLESS !== 'false' });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    async close() {
        if (this.page) await this.page.close();
        if (this.context) await this.context.close();
        if (this.browser) await this.browser.close();
    }
}

setWorldConstructor(CustomWorld);
