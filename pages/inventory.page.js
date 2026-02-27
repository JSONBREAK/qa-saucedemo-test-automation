import { expect } from '@playwright/test'


// Page Object: Inventory (หน้ารายการสินค้า)
export class InventoryPage {
  constructor(page) {
    this.page = page
    this.inventoryList = page.locator('[data-test="inventory-list"]') // รายการสินค้า
    this.addBackpackBtn = page.locator('#add-to-cart-sauce-labs-backpack') // ปุ่มเพิ่ม Backpack
    this.cartLink = page.locator('.shopping_cart_link') // ลิงก์ไปตะกร้า
    this.cartBadge = page.locator('.shopping_cart_badge') // ตัวเลขแสดงจำนวนสินค้าในตะกร้า
    this.addBikeLightBtn = page.locator('#add-to-cart-sauce-labs-bike-light') // ปุ่มเพิ่ม Bike Light
    this.removeBackpackBtn = page.locator('#remove-sauce-labs-backpack') // ปุ่มลบ Backpack
  }


  // ตรวจสอบว่าอยู่หน้ารายการสินค้า
  async assertLoaded() {
    await expect(this.page).toHaveURL(/inventory/)
    await expect(this.inventoryList).toBeVisible()
  }


  // เพิ่ม Backpack ลงตะกร้า
  async addBackpackToCart() {
    await this.addBackpackBtn.click()
  }


  // ตรวจสอบจำนวนสินค้าในตะกร้า
  async assertCartCount(count) {
    if (count === 0) {
      await expect(this.cartBadge).toHaveCount(0)
    } else {
      await expect(this.cartBadge).toHaveText(String(count))
    }
  }


  // ไปหน้าตะกร้าสินค้า
  async goToCart() {
    await this.cartLink.click()
  }


  // เพิ่ม Bike Light ลงตะกร้า
  async addBikeLightToCart() {
    await this.addBikeLightBtn.click()
  }


  // ลบ Backpack ออกจากตะกร้า
  async removeBackpackFromCart() {
    await this.removeBackpackBtn.click()
  }
}