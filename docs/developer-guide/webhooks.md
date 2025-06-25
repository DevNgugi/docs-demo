---
id: webhooks
title: Handling Webhooks
sidebar_position: 6
---

# Handling Webhooks

Webhooks allow Nairopay to notify your backend in real time when specific events occur, such as payment completion. This is the most reliable way to confirm transactions and update your systems accordingly.

---

## Why Use Webhooks?

- **Asynchronous Confirmation**: Receive payment results even if the customer closes the browser.
- **System Automation**: Trigger order fulfillment, send receipts, or update your database automatically.
- **Redundancy**: Acts as a fallback if the user never returns to your site after checkout.

---

## Setting Up Webhooks

1. Log in to your [Nairopay Dashboard](https://dashboard.nairopay.com).
2. Navigate to **Developers → Webhooks**.
3. Add your endpoint URL (e.g., `https://yourdomain.com/webhooks/nairopay`).
4. Nairopay will send POST requests to this URL on key events.

---

## Event Types

| Event             | Description                             |
|-------------------|-----------------------------------------|
| `payment.success` | Payment was successfully completed.     |
| `payment.failed`  | Payment attempt failed.                 |
| `payment.refunded`| Payment was refunded by the merchant.   |

---

## Verifying Webhook Payloads

Every webhook request is signed using a secret, which you can configure in the dashboard. You should:

- Verify the signature using an HMAC-SHA256 hash.
- Ensure the timestamp is recent (within 5 minutes).
- Respond with a `200 OK` status code within 5 seconds.

---

## Sample Payload

```json
{
  "event": "payment.success",
  "data": {
    "reference": "ORDER_2025_001",
    "session_id": "sess_abc123xyz",
    "amount": 2500,
    "currency": "KES",
    "paid": true,
    "customer_email": "customer@example.com"
  }
}
```
## Sample Express.js Handler (Node.js)

```js
const express = require("express");
const crypto = require("crypto");

const app = express();
app.use(express.json());

app.post("/webhooks/nairopay", (req, res) => {
  const signature = req.headers["x-nairopay-signature"];
  const secret = "your_webhook_secret";

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(JSON.stringify(req.body))
    .digest("hex");

  if (signature !== expectedSignature) {
    return res.status(401).send("Invalid signature");
  }

  const event = req.body.event;

  if (event === "payment.success") {
    const data = req.body.data;
    // Confirm order, update DB, send receipt, etc.
  }

  res.status(200).send("Received");
});
```