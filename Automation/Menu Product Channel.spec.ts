import {test , chromium} from '@playwright/test';
import { Credential } from '../Element/Element';
import { Menu_Product_Channel } from '../Element/Element';
test('Execute Master Product Hospital', async () => {
    const browser = await chromium.launch({
        channel: 'chrome',
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://uatcc-cms3.chubblife.co.id/login')
    // login
    await page.waitForSelector('#email');
    await page.fill('#email',Credential.email);
    await page.waitForSelector('#password');
    await page.fill('#password',Credential.password);

    await page.click(Credential.signInButtonSelector);

    // Add Crossell Product Channel
    await page.click(Menu_Product_Channel.btnCrossell);
    // await page.getByRole('button', { name: 'Cross Sell' }).click();
    await page.click(Menu_Product_Channel.btnMenuProductChannel);
    // await page.getByRole('link', { name: 'Product Channel' }).click();
    await page.click(Menu_Product_Channel.addNew);
    // await page.getByRole('link', { name: 'Add New' }).click();
    await page.fill(Menu_Product_Channel.inputProductCode,'Testing');
    // await page.getByRole('textbox').nth(1).click();
    // await page.getByRole('textbox').nth(1).fill('Testing');
    await page.fill(Menu_Product_Channel.inputProductName,'Testing');
    // await page.getByRole('textbox').nth(2).click();
    // await page.getByRole('textbox').nth(2).fill('Testing');
    await page.click(Menu_Product_Channel.Status);
    // await page.getByText('Inactive').click();
    //await page.waitForTimeout(1000);
    await page.click(Menu_Product_Channel.Save);
    // await page.getByRole('button', { name: 'Save' }).click();
    await page.click(Menu_Product_Channel.Yes);
    // await page.getByRole('button', { name: 'Yes!' }).click();
    await page.waitForTimeout(2000);
    // search and delete
    
})