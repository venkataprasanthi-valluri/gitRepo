const { test, expect } = require('@playwright/test');
 
 
 
 
test('@rahulshettyacademy_registration', async ({ page }) => {
   //js file- Login js, DashboardPage
   //const email = "anshika@gmail.com";
   //const productName = 'zara coat 3';
   //const products = page.locator(".card-body");
   //await page.goto("https://rahulshettyacademy.com/client");
   //await page.locator("#userEmail").fill(email);
   //await page.locator("#userPassword").type("Iamking@000");
   //await page.locator("[value='Login']").click();
   //await page.waitForLoadState('networkidle');
   //await page.locator(".card-body b").first().waitFor();
   //const titles = await page.locator(".card-body b").allTextContents();
   //console.log(titles); 
   
   
   await page.goto("http://www.rahulshettyacademy.com/client/");
   await page.locator(".login-wrapper-footer-text").click();
   await page.getByPlaceholder("First Name").fill("Test1");
   await page.getByPlaceholder("Last Name").fill("Test1");
   await page.getByPlaceholder("email@example.com").fill("test1.test1@gmail.com");
   await page.getByPlaceholder("enter your number").fill("9999999999");
   await page.locator("select[formcontrolname='occupation']").selectOption("Engineer");
   await page.locator("input[value='Female']").click();
   await page.locator("input[id='userPassword']").fill("Test1Test1");
   await page.locator("input[id='confirmPassword']").fill("Test1Test1");
   await page.locator("input[type='checkbox']").click();
   await page.locator("input[type='submit']").click();
   await page.pause(10);
   await page.locator(".headcolor").isVisible();
   await page.locator("button[class='btn btn-primary']").click();
   
   //Checkboxes
   //toBeChecked - for checking checkbox
   //isChecked - for checking status of checkbox
   
   
 
})
