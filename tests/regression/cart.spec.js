import { test } from '@playwright/test'
import { LoginPage } from '../../pages/login.page.js'
import { InventoryPage } from '../../pages/inventory.page.js'
import { CartPage } from '../../pages/cart.page.js'
import { users } from '../../test-data/users.js'

const { standard } = users;

// กลุ่มทดสอบ cart regression
test.describe('Cart Regression @regression', () => {

  // เตรียมสถานะ: login และเพิ่มสินค้าเข้าตะกร้า ก่อนแต่ละ test
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)

    await loginPage.goto()
    await loginPage.login(standard.username, standard.password)
    await inventoryPage.addBackpackToCart()
    await inventoryPage.goToCart()
  })


  // ตรวจสอบว่าตะกร้ามีจำนวนสินค้าถูกต้อง
  test('Should display correct number of items in cart', async ({ page }) => {
    const cartPage = new CartPage(page)

    await cartPage.assertLoaded()
    await cartPage.assertItemCount(1)
  })


  // ลบสินค้าออกจากตะกร้าแล้วต้องว่าง
  test('Should remove item from cart and show empty cart', async ({ page }) => {
    const cartPage = new CartPage(page)
    const inventoryPage = new InventoryPage(page)

    await cartPage.assertLoaded()
    await cartPage.removeBackpack()
    await cartPage.assertItemCount(0)
    await inventoryPage.assertCartCount(0)
  })

})