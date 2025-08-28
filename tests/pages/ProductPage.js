const { expect } = require('@playwright/test');

class ProductPage {
    constructor(page) {
        this.page = page;
        this.priceLocator = this.page.locator('h3.price-container');
        this.addToCartButton = this.page.getByRole('link', { name: 'Add to cart' });
        this.cartLink = this.page.locator('#cartur');
    }

    async getPrice() {
        const txt = await this.priceLocator.first().textContent();
        const match = txt.match(/\d+/);
        return match ? parseInt(match[0], 10) : null;
    }

    async addToCart() {
        await Promise.all([
            this.page.waitForEvent('dialog').then(dialog => dialog.accept()),
            this.addToCartButton.click()
        ]);
    }

    async goToCart() {
        await this.cartLink.click();
        await this.page.waitForSelector('#tbodyid tr', { timeout: 15000 });
    }
}

module.exports = ProductPage;
