import {test , chromium} from '@playwright/test';
import { Credential } from '../Element/Element';
import { Product_Info } from '../Element/Element';

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
    //add new
    await page.click(Product_Info.btnsubProductInfo);
    await page.click(Product_Info.btnProductInfo);
    await page.click(Product_Info.btnNewProductInfo);
    
    await page.fill (Product_Info.PersonalInsuredCode,'TEGPRK');
    await page.fill (Product_Info.PersonalInsuredName,'TEGPaRK');
    await page.fill (Product_Info.PersonalInsuredLink,'https://uatcc-cms3.chubblife.co.id/product/product-info/form');
    await page.setInputFiles('#file-input', './images/Ebao Profile.pdf');
    await page.fill (Product_Info.PersonalInsuredLaink,'TEGPaRK');

    
})