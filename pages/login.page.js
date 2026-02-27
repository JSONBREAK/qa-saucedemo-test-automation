
import { expect } from '@playwright/test';

// Page Object: Login
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#user-name');      // input: username
    this.password = page.locator('#password');       // input: password
    this.loginBtn = page.locator('#login-button');   // button: login
    this.errorMessage = page.locator('[data-test="error"]'); // error message
  }

  // เปิดหน้า login
  async goto() {
    await this.page.goto('/');
  }

  // กรอก username, password แล้วคลิก login
  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
  }

  // ตรวจสอบข้อความ error
  async assertErrorMessage(message) {
    await expect(this.errorMessage).toHaveText(message);
  }
}