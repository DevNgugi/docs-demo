---
id: verifying-payment
title: Verifying Payment
sidebar_position: 5
---

# Verifying Payment

After a customer completes the checkout flow, it's essential to verify the status of the transaction on your backend before confirming the order or service.

---

## Why Verification Matters

Relying solely on the front-end redirect or callback is not secure. Instead, your server should confirm payment status by querying Nairopay's API using the session or reference ID.

---

## Endpoint

**GET** `https://api.nairopay.co.ke/v1/payment-sessions/{session_id}`

---

## Required Headers

| Header        | Value                         | Description                        |
|---------------|-------------------------------|------------------------------------|
| Authorization | Bearer `<SECRET_API_KEY>`     | Your secret key from the dashboard |
| Accept        | application/json              | Expected response format           |

---

## Sample Request (Node.js)

```js
const axios = require("axios");

const response = await axios.get(
  "https://api.nairopay.co.ke/v1/payment-sessions/sess_abc123xyz",
  {
    headers: {
      Authorization: "Bearer sk_live_yourSecretKeyHere",
      Accept: "application/json"
    }
  }
);
```
## Sample Response

```js
{
  "status": "success",
  "data": {
    "session_id": "sess_abc123xyz",
    "reference": "ORDER_2025_001",
    "amount": 2500,
    "currency": "KES",
    "paid": true,
    "payment_method": "card",
    "customer_email": "customer@example.com",
    "created_at": "2025-06-25T13:45:00Z"
  }
}
```