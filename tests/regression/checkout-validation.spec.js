import { test } from '@playwright/test'
import { LoginPage } from '../../pages/login.page.js'
import { InventoryPage } from '../../pages/inventory.page.js'
import { CartPage } from '../../pages/cart.page.js'
import { CheckoutPage } from '../../pages/checkout.page.js'
import { users } from '../../fixtures/users.js'

const { standard } = users;


// กลุ่มทดสอบสำหรับตรวจสอบ validation ในขั้นตอน Checkout
test.describe('Checkout Validation @regression', () => {

  // เตรียมสถานะ: login, เพิ่มสินค้า, ไปที่ checkout ก่อนแต่ละ test
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    const cartPage = new CartPage(page)

    await loginPage.goto()
    await loginPage.login(standard.username, standard.password)
    await inventoryPage.addBackpackToCart()
    await inventoryPage.goToCart()
    await cartPage.clickCheckout()
  })


  // กรณีไม่ได้กรอก First Name ต้องแสดง error
  test('Should show error when First Name is missing', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page)

    await checkoutPage.fillInCheckoutInfo('', 'TEST', '12345')
    await checkoutPage.clickContinue()
    await checkoutPage.assertErrorMessage('Error: First Name is required')
  })


  // กรณีไม่ได้กรอก Last Name ต้องแสดง error
  test('Should show error when Last Name is missing', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page)

    await checkoutPage.fillInCheckoutInfo('John', '', '12345')
    await checkoutPage.clickContinue()
    await checkoutPage.assertErrorMessage('Error: Last Name is required')
  })


  // กรณีไม่ได้กรอก Zip/Postal Code ต้องแสดง error
  test('Should show error when Zip is missing', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page)

    await checkoutPage.fillInCheckoutInfo('John', 'Doe', '')
    await checkoutPage.clickContinue()
    await checkoutPage.assertErrorMessage('Error: Postal Code is required')
  })

})