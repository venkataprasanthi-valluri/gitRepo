const { test, expect } = require('@playwright/test');
 
  
test('@swaglabs_login', async ({ page }) => {
      
   await page.goto("https://www.saucedemo.com/");
   await page.locator("#user-name").fill("standard_user");
   await page.locator("#password").fill("secret_sauce");
   await page.locator("#login-button").click();
      
})

test('@swaglabs_lockedoutuser', async ({ page }) => {
      
	await page.goto("https://www.saucedemo.com/");
	await page.locator("#user-name").fill("locked_out_user");
	await page.locator("#password").fill("secret_sauce");
	await page.locator("#login-button").click();
	      
   try {
       await expect(page.locator(".error-button")).toBeVisible();
	   error_msg=page.locator('.error-button').textContent();
	   await console.log(error_msg);
     } 
	 
	catch (error) {
       console.log("error");
     }
})
test('@swaglabs_problemuser', async ({ page }) => {
      
	await page.goto("https://www.saucedemo.com/");
	await page.locator("#user-name").fill("problem_user");
	await page.locator("#password").fill("secret_sauce");
	await page.locator("#login-button").click();
	      
})




