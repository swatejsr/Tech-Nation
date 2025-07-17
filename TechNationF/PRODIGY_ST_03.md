# 🧪 SauceDemo Functional Test Report

**Project:** SauceDemo (Swag Labs)  
**URL:** https://www.saucedemo.com/  
**Tester:** Raghav Agarwal  
**Date:** April 8, 2025  
**Tested On:**  
- **Browser:** Chrome 112 (Windows 10)  
- **Viewports:** Desktop (1920×1080), Mobile (375×667)

---

## 🚀 User Credentials Tested

I tested the login experience using all six available user types provided by SauceDemo:

- `standard_user`  
- `locked_out_user`  
- `problem_user`  
- `performance_glitch_user`  
- `error_user`  
- `visual_user`  

All accounts used the same password: `secret_sauce`.

---

## 🔐 Login Module Summary

The login functionality was tested across all user accounts. Overall, the system behaved as expected for each role:

- **Standard user** was able to log in and access the inventory page with no issues.  
- **Locked-out user** correctly triggered an error message indicating access denial.  
- **Problem user** logged in but encountered visual bugs, such as broken or missing images.  
- **Performance glitch user** experienced a slight but noticeable delay during login, as expected.  
- **Error user** saw occasional inventory page errors after login.  
- **Visual user** faced UI misalignments like overlapping elements and buttons.  
- Attempts to log in with **empty fields** correctly prompted validation messages.  
- However, one issue was observed: **The clear ("×") icon in input fields does not clear the entered text.** This needs fixing.

---

## 🛒 Inventory & Sorting Features

Once logged in as `standard_user`, the inventory page functioned well:

- All six products loaded with the correct name, price, image, and “Add to cart” button.  
- Sorting options worked flawlessly for all four modes: Name (A→Z, Z→A) and Price (Low→High, High→Low).  
- Clicking a product name or image opened the detailed product page with accurate information.

---

## 🛍️ Cart Experience

Cart interactions were intuitive and smooth:

- Adding and removing items updated the cart badge accordingly.  
- Users could view cart contents, continue shopping, or proceed to checkout with no issues.  
- **However, one major bug was found:** users are **allowed to begin checkout even with an empty cart**, without any warning or message. This should be addressed to avoid user confusion.

---

## 💳 Checkout Process

The checkout flow for `standard_user` was consistent and user-friendly:

- Checkout started smoothly from the cart.  
- Required field validation worked correctly if any user info was missing.  
- Upon entering valid details, the user moved to the overview page showing order summary and totals.  
- Finishing the order led to a clean thank-you confirmation screen.  
- The cancel button returned the user back to the appropriate page.

---

## 📱 Responsiveness & Edge Case Testing

Responsive testing showed that the website handles different screen sizes well:

- **Desktop layout** adjusts properly when resized.  
- **Mobile portrait and landscape views** remain fully usable, with no layout breakage.  
- **Performance glitch user** still experienced slightly longer load times, but within an acceptable 5-second range.

---

## 📊 Final Summary

- **Total Test Cases Executed:** 30  
- **Passed:** 28  
- **Failed:** 2  

### ❌ Issues Found:
1. **Clear-icon bug:** Input field clear buttons don’t clear the text.  
2. **Empty-cart checkout:** Users can proceed to checkout with nothing in the cart.

---

## 📌 Recommendations

- Fix the clear-icon functionality in login input fields to improve user experience.  
- Block access to the checkout process when the cart is empty, and display a relevant message.

---

*End of Report*
