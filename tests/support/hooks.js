const { Before, After, Status } = require('@cucumber/cucumber');

Before(async function () {
    await this.launch();
});

After(async function (scenario) {
    if (scenario.result?.status === Status.FAILED && this.page) {
        await this.page.screenshot({
            path: `./screenshot-fail-${Date.now()}.png`,
            fullPage: true,
        });
    }
    await this.close();
});
