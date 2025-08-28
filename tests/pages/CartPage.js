const { expect } = require('@playwright/test');

class CartPage {
    constructor(page) {
        this.page = page;
        this.firstRow = this.page.locator('#tbodyid tr').first();
    }

    async validateProductName(nomeEsperado) {
        const rows = await this.page.$$('#tbodyid tr');
        for (const row of rows) {
            const nome = await row.$eval('td:nth-child(2)', el => el.textContent.trim());
            if (nome === nomeEsperado) return;
        }
        throw new Error(`Produto ${nomeEsperado} não encontrado no carrinho.`);
    }

    async validateProductPrice(precoEsperado) {
        const rows = await this.page.$$('#tbodyid tr');
        for (const row of rows) {
            const preco = await row.$eval('td:nth-child(3)', el => parseFloat(el.textContent));
            if (preco === precoEsperado) return;
        }
        throw new Error(`Preço ${precoEsperado} não encontrado no carrinho.`);
    }
}

module.exports = CartPage;
