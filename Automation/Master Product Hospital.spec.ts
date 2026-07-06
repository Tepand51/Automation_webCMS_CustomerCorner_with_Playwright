import {test , chromium} from '@playwright/test';
import { Credential } from '../Element/Element';
import { MasterProductHospital } from '../Element/Element';
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

    //add Master Product Hospital
    await page.click(MasterProductHospital.btnsubMasterProductHospital);
    await page.click(MasterProductHospital.btnMasterProductHospital);
    await page.click(MasterProductHospital.btnNewMasterProduct);
    
    // select dropdown
    await page.selectOption(MasterProductHospital.partnerId, { label: 'Overseas Healthmetrics' });
    await page.selectOption(MasterProductHospital.categoryId, { label: 'General' });
    await page.fill (MasterProductHospital.ProductCode,'TEGPRK1');
    await page.fill (MasterProductHospital.ProductName,'TEGPaRK1');
    await page.click(MasterProductHospital.Status);
    await page.click(MasterProductHospital.Save);
    await page.click(MasterProductHospital.Yes);

    // search add baru
    await page.waitForSelector(MasterProductHospital.waitSearch);
    await page.fill(MasterProductHospital.InputSearch, 'TEGPRK');
    await page.click(MasterProductHospital.Search);
    
    // delete 
    await page.click(MasterProductHospital.Delete);
    await page.click(MasterProductHospital.Yes);
    
})