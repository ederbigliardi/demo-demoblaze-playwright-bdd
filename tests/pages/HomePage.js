const { expect } = require('@playwright/test');

class HomePage {
    constructor(page) {
        this.page = page;
        this.productLink = (nome) => this.page.getByRole('link', { name: nome, exact: true });
    }

    async goto() {
        await this.page.goto('https://www.demoblaze.com/', { waitUntil: 'domcontentloaded' });
        await this.page.waitForSelector('#tbodyid .card', { timeout: 15000 });
    }

    async openProduct(nome) {
        const link = this.productLink(nome);
        await expect(link).toBeVisible({ timeout: 15000 });
        await link.click();
        await this.page.waitForSelector('h2.name', { timeout: 15000 });
    }
}

module.exports = HomePage;
