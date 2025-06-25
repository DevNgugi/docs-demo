---
id: creating-payment-session
title: Creating a Payment Session
sidebar_position: 3
---

# Creating a Payment Session

Before a customer can pay through Nairopay, you must first create a **payment session** from your backend. This session links a specific transaction to a customer, amount, and other metadata.

This guide walks you through the process of securely creating a payment session using your Secret API key.

---

## Endpoint

```http
POST https://api.nairopay.co.ke/v1/payment-sessions
```


## Required Headers

| Header        | Value                         | Description                          |
|---------------|-------------------------------|--------------------------------------|
| Authorization | Bearer `<SECRET_API_KEY>`     | Your secret key from the dashboard   |
| Content-Type  | application/json              | Required for JSON body               |

---

## Request Body Parameters

| Field         | Type     | Required | Description                                             |
|---------------|----------|----------|---------------------------------------------------------|
| amount        | Integer  | Yes      | Amount in smallest currency unit (e.g., cents)          |
| currency      | String   | Yes      | Currency code (e.g., `KES`)                             |
| reference     | String   | Yes      | Unique identifier for this transaction                  |
| email         | String   | Optional | Customer's email address (used for receipt delivery)    |
| callback_url  | String   | Optional | URL to redirect the customer after payment completion   |

---

## Sample Request (Node.js)

```js
const axios = require("axios");

const response = await axios.post(
  "https://api.nairopay.co.ke/v1/payment-sessions",
  {
    amount: 2500,
    currency: "KES",
    reference: "ORDER_2025_001",
    email: "customer@example.com",
    callback_url: "https://merchant-website.com/payment-complete"
  },
  {
    headers: {
      Authorization: "Bearer sk_live_yourSecretKeyHere",
      "Content-Type": "application/json"
    }
  }
);

```
## Sample Response
```js
{
  "status": "success",
  "session_id": "sess_abc123xyz",
  "checkout_url": "https://checkout.nairopay.co.ke/sess_abc123xyz"
}
```
