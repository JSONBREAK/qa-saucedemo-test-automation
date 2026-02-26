
import { test, expect } from '@playwright/test';
import { users } from '../../test-data/users.js';

// Login Negative: Locked Out User
const { locked } = users;

test('Login with locked_out_user should show error message', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle('Swag Labs');

    await page.getByPlaceholder("Username").type(locked.username)
    await page.getByPlaceholder("Password").type(locked.password)
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible(); 
});