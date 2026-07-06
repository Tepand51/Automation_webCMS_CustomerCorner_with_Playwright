import {test , chromium} from '@playwright/test';
import { Credential } from '../Element/Element';
import { Menu_Master_Bank } from '../Element/Element';
test('Execute Menu Master Bank', async () => {
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

    // await page.getByRole('button', { name: 'Master Bank' }).click();
    await page.click(Menu_Master_Bank.MasterBank);
    // await page.getByRole('link', { name: 'Bank' }).click();
    await page.click(Menu_Master_Bank.Bank);
    // await page.getByRole('link', { name: 'Add New' }).click();
    // await page.click(Menu_Master_Bank.AddBank);
    // // await page.getByRole('main').getByRole('textbox').click();
    // // await page.getByRole('main').getByRole('textbox').fill('Bank BCAAA');
    // await page.fill(Menu_Master_Bank.BankName,'Bank Togar');
    // // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);
    // await page.click(Menu_Master_Bank.Save);
    // await page.waitForTimeout(1000);
    // // await page.getByRole('button', { name: 'Yes!' }).click();
    // await page.click(Menu_Master_Bank.Yes);
    // await page.waitForTimeout(1000);

    //search
    // await page.getByRole('textbox', { name: 'Search . .' }).click();
    // await page.getByRole('textbox', { name: 'Search . .' }).fill('Bank BCAA');
    await page.waitForSelector(Menu_Master_Bank.waitSearch);
    await page.fill(Menu_Master_Bank.InputSearch, 'Bank Togar');
    await page.keyboard.press('Enter');
    // await page.getByRole('textbox', { name: 'Search . .' }).press('Enter');
    await page.waitForTimeout(2000);
    // await page.getByLabel('').check();
    // await page.click(Menu_Master_Bank.Active);
    //Inactive
    await page.click(Menu_Master_Bank.Active);
    // await page.getByLabel('').uncheck();
    await page.waitForTimeout(2000);
})