import { test } from '@playwright/test'
import { LoginPage } from '../../pages/login.page.js'
import { InventoryPage } from '../../pages/inventory.page.js'
import { users } from '../../fixtures/users.js'

const { standard } = users;

// กลุ่มทดสอบ inventory regression
test.describe('Inventory Regression @regression', () => {


  // เตรียมสถานะ: login ก่อนแต่ละ test
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.login(standard.username, standard.password)
  })


  // เพิ่มสินค้าหลายชิ้นและตรวจสอบ cart badge
  test('Should add multiple items and update cart badge', async ({ page }) => {
    const inventoryPage = new InventoryPage(page)

    await inventoryPage.assertLoaded()
    await inventoryPage.addBackpackToCart()
    await inventoryPage.addBikeLightToCart()
    await inventoryPage.assertCartCount(2)
  })


  // ลบสินค้าออก 1 ชิ้นและตรวจสอบ cart badge
  test('Should remove item and update cart badge correctly', async ({ page }) => {
    const inventoryPage = new InventoryPage(page)

    await inventoryPage.assertLoaded()
    await inventoryPage.addBackpackToCart()
    await inventoryPage.addBikeLightToCart()
    await inventoryPage.assertCartCount(2)
    await inventoryPage.removeBackpackFromCart()
    await inventoryPage.assertCartCount(1)
  })

})