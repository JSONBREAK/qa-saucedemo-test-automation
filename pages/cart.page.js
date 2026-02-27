import { expect } from '@playwright/test'


// Page Object: Cart (หน้าตะกร้าสินค้า)
export class CartPage {
  constructor(page) {
    this.page = page
    this.cartItems = page.locator('.cart_item') // รายการสินค้าในตะกร้า
    this.checkoutBtn = page.locator('#checkout') // ปุ่ม Checkout
    this.removeBackpackBtn = page.locator('#remove-sauce-labs-backpack') // ปุ่มลบ Backpack
  }


  // ตรวจสอบว่าอยู่หน้าตะกร้า
  async assertLoaded() {
    await expect(this.page).toHaveURL(/cart/)
  }


  // ตรวจสอบจำนวนสินค้าที่อยู่ในตะกร้า
  async assertItemCount(count) {
    await expect(this.cartItems).toHaveCount(count)
  }


  // คลิกปุ่ม Checkout
  async clickCheckout() {
    await this.checkoutBtn.click()
  }


  // ลบ Backpack ออกจากตะกร้า
  async removeBackpack() {
    await this.removeBackpackBtn.click()
  }
}