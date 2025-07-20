# 🧮 sCalc Functional Test Report

**App:** sCalc – Simple Web Calculator  
**URL:** https://dunizb.github.io/sCalc/index.html  
**Tester:** Raghav Agarwal  
**Date:** April 7, 2025  
**Environment:**  
- **Browser:** Chrome 112 (Windows 10)  
- **Device:** Desktop (1920×1080)

---

## ✅ Basic Arithmetic Operations

### TC01 – Adding Two Numbers
**Steps:**  
Tap: `2` → `＋` → `3` → `＝`  
**Expected:** Display shows `5`

---

### TC02 – Subtracting Two Numbers  
**Steps:**  
Tap: `8` → `－` → `5` → `＝`  
**Expected:** Display shows `3`

---

### TC03 – Multiplying Two Numbers  
**Steps:**  
Tap: `4` → `×` → `6` → `＝`  
**Expected:** Display shows `24`

---

### TC04 – Dividing Two Numbers  
**Steps:**  
Tap: `9` → `÷` → `3` → `＝`  
**Expected:** Display shows `3`

---

## ⚙️ Operation Logic & Chaining

### TC05 – Immediate Execution (No Operator Precedence)  
**Steps:**  
Tap: `2` → `＋` → `3` → `×` → `4` → `＝`  
**Expected:** Display shows `20`  
*(Evaluated left to right: (2 + 3) = 5 → 5 × 4)*

---

### TC06 – Chaining Operations Without Pressing Equals  
**Steps:**  
Tap: `5` → `＋` → `2` → `×` → `3` → `＝`  
**Expected:** Display shows `21`  
*(Evaluated as: 5 + 2 = 7 → 7 × 3)*

---

## 🔢 Decimal Input

### TC07 – Decimal Addition  
**Steps:**  
Tap: `3` → `.` → `2` → `＋` → `0` → `.` → `8` → `＝`  
**Expected:** Display shows `4`

---

### TC08 – Leading Decimal Input  
**Steps:**  
Tap: `.` → `5` → `＋` → `.` → `2` → `＝`  
**Expected:** Display shows `0.7`

---

### TC11 – Multiple Decimal Points  
**Steps:**  
Tap: `5` → `.` → `2` → `.` → `3`  
**Expected:** Second decimal is ignored → Display shows `5.23`

---

## ➕ Special Scenarios

### TC09 – Negative Number Addition  
**Steps:**  
Tap: `－` → `5` → `＋` → `3` → `＝`  
**Expected:** Display shows `-2`

---

### TC10 – Division by Zero  
**Steps:**  
Tap: `5` → `÷` → `0` → `＝`  
**Expected:** Display shows `Infinity` or appropriate error message

---

### TC12 – Equals Without Operation  
**Steps:**  
Tap: `7` → `＝`  
**Expected:** Display remains `7`

---

## 🧹 Functional Controls

### TC13 – Clear Entry (CE)  
**Steps:**  
Tap: `2` → `＋` → `3` → `CE` → `4` → `＝`  
**Expected:** Display shows `4`

---

### TC14 – Backspace (←)  
**Steps:**  
Tap: `1` → `2` → `3` → `←` → `←` → `←`  
**Expected:** Display shows `12` → `1` → `0`

---

### TC15 – Modulo (%)  
**Steps:**  
Tap: `5` → `0` → `%` → `3` → `＝`  
**Expected:** Display shows `2`  
*(50 mod 3 = 2)*

---

## 🎨 UI & Appearance

### TC16 – Theme Toggle (Light ↔ Dark Mode)  
**Steps:**  
Tap the **theme toggle icon**  
**Expected:** UI switches between light and dark themes without affecting functionality

---

### TC17 – Cancel (✖) Icon  
**Steps:**  
Tap the **cancel icon**  
**Expected:** Calculator window slides down and hides

---

### TC18 – Full-Screen (⛶) Icon  
**Steps:**  
Tap the **full-screen icon**  
**Expected:** Calculator expands to fill the screen; tap again to return to normal view

---

### TC19 – Dark Mode Functionality  
**Steps:**  
Enable dark mode → Tap: `2` → `＋` → `2` → `＝`  
**Expected:** Display shows `4` – all operations work in dark mode

---

### TC20 – One-Hand Mode Toggle  
**Steps:**  
Swipe calculator panel left → swipe right  
**Expected:** Layout switches to left-hand mode, then back to right-hand mode

---

*End of Report*
