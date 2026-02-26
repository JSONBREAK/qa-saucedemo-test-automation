## Risk-Based Test Plan: SauceDemo 

### 1. Business Overview
SauceDemo เป็นเว็บ E-commerce สำหรับทดลองอัตโนมัติ Flow ธุรกิจหลักคือ "ลูกค้าซื้อของสำเร็จ"


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


| Flow                | Impact  | Likelihood | Risk Level | Decision (Test Type) | Automate? | หมายเหตุ |
|---------------------|---------|------------|------------|----------------------|-----------|----------|
| Login               | High    | High       | Critical   | E2E                  | ✔         | ถ้า login ไม่ได้ ซื้อของไม่ได้ |
| Browse Product      | Low     | Low        | Low        | Integration/Manual   | ✖         | ไม่กระทบยอดขายโดยตรง |
| Add to Cart         | High    | Low        | Medium-High| E2E                  | ✔         | ถ้าใส่ตะกร้าไม่ได้ ซื้อไม่ได้ |
| Checkout (รวม Finish confirmation) | High    | Medium     | High      | E2E                  | ✔         | กระทบยอดขายโดยตรง + ยืนยันสำเร็จ |
| View Order History  | Medium  | Low        | Medium     | Manual               | ✖         | ไม่กระทบยอดขายทันที |

```
Likelihood = โอกาสที่ปัญหาจะเกิดขึ้น
Impact = ผลกระทบต่อธุรกิจถ้าปัญหาเกิดขึ้น
Risk = Impact × Likelihood
```

### 3. Critical Business Flow (Happy Path)
1. Login (standard_user)
2. Browse Product
3. Add item to cart
4. Cart
5. Checkout (รวม Finish confirmation)
6. Verify order complete

> **Note:** โฟกัส automate เฉพาะ flow ที่กระทบยอดขายโดยตรงก่อน (Happy Path)

### 4. Automation Strategy
- E2E test เฉพาะเส้นหลัก (Happy Path)
- Integration/Unit test สำหรับฟีเจอร์รอง
- Manual test สำหรับฟีเจอร์ที่เปลี่ยนไม่บ่อยหรือความเสี่ยงต่ำ


### 5. CI/CD
- ทุกครั้งที่ deploy หรือ pull request จะรัน smoke test (Happy Path) อัตโนมัติ

---
**สรุป:**
- โฟกัส automate เฉพาะ flow สำคัญก่อน
- ลดจำนวน E2E test ให้ดูแลง่ายและรันเร็ว
- ทบทวน test อยู่เสมอให้เหมาะกับความเสี่ยงธุรกิจ

## SauceDemo สรุป
**Critical (ต้องทำก่อน)**
- Login
- Add to Cart
- Checkout 

**Medium (ทำถ้ามีเวลา)**
- View Order History
- Change Profile

**Low (ไม่ต้อง automate)**
- Browse Product




