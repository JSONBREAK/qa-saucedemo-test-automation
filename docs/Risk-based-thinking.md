
## Risk-Based Test Plan: SauceDemo

### 1. Business Overview
SauceDemo เป็นเว็บ E-commerce ที่ใช้เป็นตัวอย่างสำหรับการทดสอบระบบอัตโนมัติ โดยมี flow ธุรกิจหลักคือ "ลูกค้าสามารถซื้อสินค้าได้สำเร็จ"

### Risk Criteria Definition

**Impact**
- **High**: กระทบรายได้โดยตรง / ทำให้ flow หลักใช้งานไม่ได้
- **Medium**: กระทบ UX หรือมี workaround
- **Low**: ไม่กระทบธุรกิจโดยตรง

**Likelihood**
- **High**: มีการเปลี่ยนบ่อย / ซับซ้อน / เคยพัง
- **Medium**: มี business logic หลายขั้นตอน
- **Low**: Stable / rarely changed

### 2. วิเคราะห์ Flow และ Risk Matrix

| Flow                                 | Impact  | Likelihood | Risk Score (H=3,M=2,L=1) | Priority | Decision                | Automate? | หมายเหตุ                         |
|---------------------------------------|---------|------------|--------------------------|----------|-------------------------|-----------|-----------------------------------|
| Login                                | High    | High       | 9 (3×3)                 | 1        | Smoke + Regression      | ✔         | Entry point                      |
| Add to Cart                          | High    | Medium     | 6 (3×2)                 | 2        | Smoke + Regression      | ✔         | กระทบ checkout                   |
| Checkout (Complete order)            | High    | Medium     | 6 (3×2)                 | 2        | Smoke + Regression      | ✔         | Revenue impact                    |
| Browse Product                       | Medium  | Medium     | 4 (2×2)                 | 3        | Regression              | ✔         | Dependency ของ cart               |
| Delayed Response Handling (performance_glitch_user) | Medium  | Medium     | 4 (2×2)                 | 3        | Regression              | ✔         | ตรวจสอบการ handle response ช้า    |

```
High = 3, Medium = 2, Low = 1
Risk Score = Impact × Likelihood
Priority: 1 = สูงสุด (ต้อง automate ก่อน)
```

### 3. Critical Business Flow (Happy Path)

1. Login (standard_user)
2. Browse product
3. Add item to cart
4. Checkout (Complete order)

> **Note:** โฟกัส automate เฉพาะ flow ที่กระทบยอดขายโดยตรงก่อน (Happy Path)

### 4. Automation Strategy

- **Smoke**
  - Happy Path: Login → Browse → Add to Cart → Checkout

- **Regression**
  - Authentication (positive & negative)
  - Product listing validation
  - Cart operations
  - Checkout validation
  - Delayed response simulation

### 5. CI/CD
- Smoke tests สามารถตั้งค่าให้รันในขั้นตอน CI เพื่อป้องกัน critical flow พังหลัง build

---
**สรุป:**
- โฟกัส automate เฉพาะ flow สำคัญก่อน
- ลดจำนวน E2E test ให้ดูแลง่ายและรันเร็ว
- ทบทวน test อยู่เสมอให้เหมาะกับความเสี่ยงธุรกิจ

## SauceDemo สรุป


**Critical (Smoke)**
- Login (standard_user)
- Browse product
- Add to Cart
- Checkout (Complete order)

**Regression**
- Negative login scenarios
- Product listing validation
- Cart operations
- Checkout validation
- Delayed response simulation




