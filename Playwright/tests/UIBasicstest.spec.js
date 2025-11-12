const {test,expect} = require('@playwright/test');


test('Browser Context Playwright test', async ({browser})=>

{
	//unlike Java programs, javascript doesn't go step by step or in order test steps are written. 
	//So, we have to use AWAIT before test step to wait before executing it.'
	//Also, we have to include 'async function' as parameter for function while using await keyword in test scripts' 
	
	
	//()=> is Anonynoms function 
	
	//chrome
	//chrome - plugins/cookies
	const context = await browser.newContext();
	const page = await context.newPage();
	await page.goto("https://www.google.com"); 
	console.log(await page.title());
	await expect(page).toHaveTitle("Google");
	await page.locator('#input').fill("playwright");  //type/fill serve same purpose. Type is discontinued now in new version
	
});

test('Page Playwright test', async ({browser,page})=>

{
	
	await page.goto("https://www.gmail.com"); 
	console.log(await page.title());
	await expect(page).toHaveTitle("Gmail");
	
});