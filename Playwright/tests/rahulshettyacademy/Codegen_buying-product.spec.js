import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('test1.test1@gmail.com');
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Test1Test1');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'View' }).first().click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('button', { name: '   Cart' }).click();
  await page.getByRole('button', { name: 'Buy Now❯' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('123');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('Test1 test1');
  await page.getByRole('textbox', { name: 'Select Country' }).click();
  await page.getByRole('textbox', { name: 'Select Country' }).fill('united');
  await page.getByRole('button', { name: ' United States', exact: true }).click();
  await page.getByText('Place Order').click();
  await page.getByText('Orders History Page').click();
  await page.getByRole('button', { name: 'View' }).first().click();
  await page.getByRole('button', { name: ' HOME' }).click();
  await page.getByText('HOME ORDERS Cart Sign Out').click();
  await page.getByRole('button', { name: 'Sign Out' }).click();
});