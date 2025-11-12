const { test, expect } = require('@playwright/test');
 
 
test('@rahulshettyacademy_Checkout', async ({ page }) => {
      
   await page.goto("http://www.rahulshettyacademy.com/client/");
   await page.locator("input[id='userEmail']").fill("test1.test1@gmail.com");
   await page.locator("input[id='userPassword']").fill("Test1Test1");
   await page.locator("input[id='login']").click();
   await page.locator("button[class='btn w-40 rounded']").nth(0).click();
   await page.locator("button[class='btn btn-primary']").click();
   await expect(page.locator("div[aria-label='Product Added To Cart']")).toBeVisible();
   await page.locator("button[class='btn btn-custom']").nth(2).click();
   await page.locator("button[class='btn btn-primary']").nth(-1).click();
   await page.locator("input[class='input txt']").nth(0).fill("123");
   await page.locator("input[class='input txt']").nth(1).fill("Test1 Test1");
   await page.locator("input[placeholder='Select Country']").fill("United States");
   await page.locator('body').click();
   await page.locator("a[class='btnn action__submit ng-star-inserted']").click();
   
   //Error message if whole field are not filled.
   //await page.locator("div[aria-label='Please Enter Full Shipping Information']").toBeVisible();
     
   
})   
   