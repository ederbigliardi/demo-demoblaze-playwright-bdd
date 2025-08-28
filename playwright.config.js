// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    timeout: 30000, // tempo máximo por teste
    use: {
        headless: false, // mostra o navegador durante os testes
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure', // tira screenshot se o teste falhar
        video: 'retain-on-failure', // grava vídeo se o teste falhar
        baseURL: 'https://www.demoblaze.com',
    },
    reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],
});
