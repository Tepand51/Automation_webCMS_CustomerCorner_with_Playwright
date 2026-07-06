import {test , chromium} from '@playwright/test';
import { Credential } from '../Element/Element';
import { Menu_User } from '../Element/Element';
test('Execute Menu User', async () => {
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

    // // Add User
    await page.waitForSelector(Menu_User.btnsettings);
    // await page.getByRole('button', { name: 'Settings' }).click();
    await page.click(Menu_User.btnsettings);
    //await page.getByRole('link', { name: 'User', exact: true }).click();
    await page.click(Menu_User.btnMenuUser);
    //await page.getByRole('link', { name: 'Add New' }).click();
    await page.click(Menu_User.btnAddUser);
    // await page.getByRole('textbox').nth(1).click();
    // await page.getByRole('textbox').nth(1).fill('Tester');
    await page.fill(Menu_User.InputName,'Tester');
    // await page.getByRole('textbox').nth(2).click();
    // await page.getByRole('textbox').nth(2).fill('Tester@gmail.com');
    await page.fill(Menu_User.InputEmail,'Tester@gmail.com');
    // await page.getByLabel('Privilege *').selectOption('1');
    await page.selectOption(Menu_User.privilegeSelect, '1');
    // await page.getByRole('button', { name: 'Save' }).click();
    await page.click(Menu_User.Save);
    // await page.getByRole('button', { name: 'Yes!' }).click();
    await page.click(Menu_User.Yes);
    
    // search and delete
    // await page.getByRole('textbox', { name: 'Search ...' }).click();
    await page.waitForSelector(Menu_User.InputSearch);
    await page.fill(Menu_User.InputSearch, 'Tester');
    // await page.getByRole('textbox', { name: 'Search ...' }).fill('Teste');
    await page.click(Menu_User.Delete);
    // await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
    await page.click(Menu_User.Yes);
    // await page.getByRole('button', { name: 'Yes!' }).click();
    await page.waitForTimeout(2000); // tambah delay 
    await browser.close();
    
})