
import { test, expect } from '@playwright/test';
import { users } from '../../test-data/users.js';

// Smoke: Happy Path Checkout

/* 
1. goto: https://www.saucedemo.com/
2. login with standard_user / secret_sauce
3. Add 1 item to cart
4. goto Cart page and verify item in cart
5. Checkout: fill in information and complete checkout
6. Verify order confirmation
*/

// Import User standard_user จากไฟล์ data/users.js
const { standard } = users;

test('Smoke: Happy Path Checkout', async ({ page }) => {
    // Step 1: Goto homepage
    await page.goto('/');
    await expect(page).toHaveTitle('Swag Labs');

    // Step 2: Login with standard_user
    await page.fill('#user-name', standard.username);
    await page.fill('#password', standard.password);
    await page.click('#login-button');
    await expect(page.locator('.inventory_list')).toBeVisible();

    // Step 3: Add 1 item to cart
    await page.click('#add-to-cart-sauce-labs-backpack');
    
    // Step 4: Goto Cart page and verify item in cart
    await page.click('.shopping_cart_link');
    await expect(page.locator('.cart_item')).toHaveCount(1);
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

    // Step 5: Checkout: fill in information and complete checkout
    await page.click('#checkout');
    await page.fill('#first-name', 'jSONBREAK');
    await page.fill('#last-name', 'TEST');
    await page.fill('#postal-code', '12345');
    await page.click('#continue');
    await page.click('#finish');

    // Step 6: Verify order confirmation
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
})




