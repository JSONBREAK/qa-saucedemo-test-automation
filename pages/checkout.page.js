import { expect } from '@playwright/test';


// Page Object: Checkout (หน้ากรอกข้อมูลและยืนยันสั่งซื้อ)
export class CheckoutPage {
    constructor(page) {
        this.page = page
        this.firstName = page.locator('#first-name')      // input: ชื่อจริง
        this.lastName = page.locator('#last-name')        // input: นามสกุล
        this.postalCode = page.locator('#postal-code')    // input: รหัสไปรษณีย์
        this.continueBtn = page.locator('#continue')      // ปุ่ม Continue
        this.completeHeader = page.locator('.complete-header') // ข้อความสั่งซื้อสำเร็จ
        this.errorMessage = page.locator('[data-test="error"]') // ข้อความ error
    }



    // กรอกข้อมูล checkout
    async fillInCheckoutInfo(firstName, lastName, postalCode) {
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.postalCode.fill(postalCode)
    }



    // คลิกปุ่ม Continue
    async clickContinue() {
        await this.continueBtn.click()
    }



    // คลิกปุ่ม Finish เพื่อยืนยันสั่งซื้อ
    async clickFinish() {
        await this.page.click('#finish')
    }


    // ตรวจสอบข้อความสั่งซื้อสำเร็จ
    async assertOrderComplete() {
        await expect(this.completeHeader)
            .toHaveText('Thank you for your order!')
    }

    // ตรวจสอบข้อความ error
    async assertErrorMessage(message) {
        await expect(this.errorMessage).toHaveText(message)
    }
}