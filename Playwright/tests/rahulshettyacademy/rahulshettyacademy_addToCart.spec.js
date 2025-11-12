const { test, expect } = require('@playwright/test');
 
 
 
 
test('@rahulshettyacademy_addToCart', async ({ page }) => {
      
   await page.goto("http://www.rahulshettyacademy.com/client/");
   await page.locator("input[id='userEmail']").fill("test1.test1@gmail.com");
   await page.locator("input[id='userPassword']").fill("Test1Test1");
   await page.locator("input[id='login']").click();
   await page.locator("button[class='btn w-40 rounded']").nth(0).click();
   await page.locator("button[class='btn btn-primary']").click();
   await expect(page.locator("div[aria-label='Product Added To Cart']")).toBeVisible();
   await page.locator("button[class='btn btn-custom']").nth(2).click();
   
})   
   