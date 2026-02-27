
// ทดสอบการ login: กรณีสำเร็จ, รหัสผิด, user ถูกล็อก

import { test } from '@playwright/test'
import { LoginPage } from '../../pages/login.page.js'
import { InventoryPage } from '../../pages/inventory.page.js'
import { users } from '../../test-data/users.js'

const { standard, locked } = users;

// กลุ่มทดสอบ login regression
test.describe('Login Regression @regression', () => {


  // login ด้วยข้อมูลถูกต้อง ต้องเข้าได้
  test('Should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)

    await loginPage.goto()
    await loginPage.login(standard.username, standard.password)
    await inventoryPage.assertLoaded()
  })


  // login ด้วยรหัสผิด ต้องแสดง error
  test('Should show error with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    await loginPage.login(standard.username, 'wrong_password')
    await loginPage.assertErrorMessage(
      'Epic sadface: Username and password do not match any user in this service'
    )
  })


  // login ด้วย user ที่ถูกล็อก ต้องแสดง error
  test('Should show error for locked user', async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    await loginPage.login(locked.username, locked.password)
    await loginPage.assertErrorMessage(
      'Epic sadface: Sorry, this user has been locked out.'
    )
  })

})