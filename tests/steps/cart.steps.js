const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../pages/HomePage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');

let precoProdutoDetalhe = null;
let homePage, productPage, cartPage;

Given('que estou na home do Demoblaze', async function () {
    homePage = new HomePage(this.page);
    productPage = new ProductPage(this.page);
    cartPage = new CartPage(this.page);

    await homePage.goto();
});

When('eu abro o produto {string}', async function (nome) {
    await homePage.openProduct(nome);
    precoProdutoDetalhe = await productPage.getPrice();
});

When('eu adiciono esse produto ao carrinho', async function () {
    await productPage.addToCart();
    await productPage.goToCart();
});

Then('o carrinho deve conter o produto {string}', async function (nome) {
    await cartPage.validateProductName(nome);
});

Then('o preço do produto no carrinho deve ser igual ao da página de detalhes', async function () {
    await cartPage.validateProductPrice(precoProdutoDetalhe);
});

