---
id: frontend
title: Frontend Integration
sidebar_position: 4
---

# Frontend Integration

This guide explains how to embed the Nairopay Checkout on your website using the JavaScript SDK.

## 1. Include the SDK Script

Add the Nairopay SDK to your HTML page:

```html
<script src="https://cdn.nairopay.com/sdk.js"></script>
## 1. Place the `<script>` Tag

Place this `<script>` tag in your page’s `<head>` or before the closing `</body>` tag.

---

## 2. Add a Payment Button

Add a button element to trigger the checkout:

```html
<button onclick="NairopayCheckout()">Pay with Nairopay</button>
```

You can style this button as needed to match your branding.

---

## 3. Initialize the Checkout

Call the `Nairopay.init()` function with the session ID you received from your backend:

```javascript
function NairopayCheckout() {
  Nairopay.init({
    sessionId: "your-generated-session-id", // Replace with actual session ID
    onSuccess: () => {
      // Handle post-payment success logic
      alert("Payment successful!");
    },
    onError: (err) => {
      // Handle errors such as canceled or failed transactions
      console.error("Payment error:", err);
    }
  });
}
```

---

## Parameters

| Parameter   | Required | Description                                         |
| ----------- | -------- | --------------------------------------------------- |
| `sessionId` | Yes      | The session ID created from your backend API.       |
| `onSuccess` | No       | Callback triggered after successful payment.        |
| `onError`   | No       | Callback triggered if payment fails or is canceled. |

---

## Best Practices

* Ensure the session ID is created securely from your backend.
* Always verify the payment server-side after completion.
* **Do not** hard-code sensitive information in the frontend.
* Customize the payment button for better UX.
* Handle both success and error callbacks gracefully.

---
