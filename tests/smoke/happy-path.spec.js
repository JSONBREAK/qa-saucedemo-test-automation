import { LoginPage } from '../../pages/login.page.js'
import { InventoryPage } from '../../pages/inventory.page.js'
import { CartPage } from '../../pages/cart.page.js'
import { CheckoutPage } from '../../pages/checkout.page.js'
import { test } from '@playwright/test'
import { users } from '../../fixtures/users.js'

const { standard } = users;

test('Smoke: Happy Path Checkout', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    const cartPage = new CartPage(page)
    const checkoutPage = new CheckoutPage(page)

    // ===== LOGIN =====
    await loginPage.goto()
    await loginPage.login(standard.username, standard.password)
    await inventoryPage.assertLoaded()

    // ===== INVENTORY =====
    await inventoryPage.addBackpackToCart()
    await inventoryPage.assertCartCount(1)
    await inventoryPage.goToCart()

    // ===== CART =====
    await cartPage.assertLoaded()
    await cartPage.assertItemCount(1)
    await cartPage.clickCheckout()

    // ===== CHECKOUT =====
    await checkoutPage.fillInCheckoutInfo('jSONBREAK', 'TEST', '12345')
    await checkoutPage.clickContinue()
    await checkoutPage.clickFinish()
    await checkoutPage.assertOrderComplete()
})