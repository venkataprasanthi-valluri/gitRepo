const { test, expect } = require('@playwright/test');
 
 
 
 
test('@rahulshettyacademy_login', async ({ page }) => {
      
   await page.goto("http://www.rahulshettyacademy.com/client/");
   
   await page.locator("input[id='userEmail']").fill("test1.test1@gmail.com");
   await page.locator("input[id='userPassword']").fill("Test1Test1");
   await page.locator("input[id='login']").click();
   //await page.locator("input[type='checkbox']").click();
   //await page.locator("input[type='submit']").click();
   //await page.pause(10);
   //await page.locator(".headcolor").isVisible();
   //await page.locator("button[class='btn btn-primary']").click();
   
   //Checkboxes
   //toBeChecked - for checking checkbox
   //isChecked - for checking status of checkbox
   
})

test('@rahulshettyacademy_ivalid_login', async ({ page }) => {
      
   await page.goto("http://www.rahulshettyacademy.com/client/");
   
   await page.locator("input[id='userEmail']").fill("test1.test1@gmail.com");
   await page.locator("input[id='userPassword']").fill("Test1Test133");
   await page.locator("input[id='login']").click();
   try {
       await expect(page.locator("div[aria-label='Incorrect email or password.']")).toBeVisible();
	   await console.error('❌ Test failed:', error.message);
     } 
	 
	catch (error) {
       console.log("error");
     }
   
   //await page.locator("input[type='checkbox']").click();
   //await page.locator("input[type='submit']").click();
   //await page.pause(10);
   //await page.locator(".headcolor").isVisible();
   //await page.locator("button[class='btn btn-primary']").click();
   
   //Checkboxes
   //toBeChecked - for checking checkbox
   //isChecked - for checking status of checkbox
   
})