# RBT-to-Testcase Mapping: SauceDemo

แปลง Risk-Based Thinking (RBT) เป็น Test Case ที่นำไป implement 

| Test Case ID | Flow         | Test Description                        | Steps (สรุป)                                   | Expected Result                  | Test Type | Risk Covered |
|--------------|--------------|-----------------------------------------|------------------------------------------------|----------------------------------|-----------|-------------|
| TC-01        | Login        | Login ด้วย standard_user                | 1. เปิดหน้า Login<br>2. กรอก user/pass<br>3. กด Login | เข้าสู่ระบบสำเร็จ (ไป inventory) | E2E       | Critical    |
| TC-02        | Add to Cart  | เพิ่มสินค้า 1 ชิ้นลงตะกร้า             | 1. Login<br>2. เลือกสินค้า<br>3. Add to cart         | สินค้าอยู่ในตะกร้า               | E2E       | Medium-High |
| TC-03        | Checkout     | Checkout จน order สำเร็จ (Happy Path)   | 1. Login<br>2. Add to cart<br>3. ไป cart<br>4. Checkout<br>5. กรอกข้อมูล<br>6. Finish | มีข้อความยืนยัน order สำเร็จ      | E2E       | High        |
| TC-04        | View Order History | ดูประวัติการสั่งซื้อ (ถ้ามี)         | 1. Login<br>2. ไปหน้า order history                | เห็นประวัติการสั่งซื้อ             | Manual    | Medium      |

> หมายเหตุ: สามารถขยาย steps และ expected result เพิ่มเติมได้ตามรายละเอียดระบบจริง

---
- Test Case เหล่านี้ mapping ตรงกับ risk ที่วิเคราะห์ไว้ใน Risk Matrix
- เริ่ม automate จาก Critical/High ก่อน แล้วค่อยขยายไป Medium/Low

