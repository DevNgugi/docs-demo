---
id: api-keys
title: API Keys
sidebar_position: 2
---

# API Keys

Nairopay uses API keys to authenticate requests made to its systems. These keys identify your application and authorize access to protected endpoints. Understanding how each key is used helps you maintain a secure and effective integration.

---

## Accessing Your API Keys

To view and manage your API keys:

1. Log in to your [Nairopay Dashboard](https://dashboard.nairopay.com)
2. Navigate to **Developers** > **API Keys**
3. Locate the **Public** and **Secret** keys
4. Copy and store them securely

---

## Key Types and Usage

### 1. Public Key

- **Purpose:** Used in frontend code to initialize the checkout session or SDK.
- **Scope:** Limited to non-sensitive operations.
- **Security Recommendation:** Safe to include in client-side code.

### 2. Secret Key

- **Purpose:** Used in the backend to perform secure operations such as:
  - Creating payment sessions
  - Verifying transactions
  - Managing webhooks
- **Scope:** Full access to your merchant account's API operations.
- **Security Recommendation:** Must never be exposed in frontend or public repositories. Always store in a secure server-side environment or secrets manager.

#### Example (Node.js):

```js
const axios = require("axios");

const response = await axios.post(
  "https://api.nairopay.co.ke/v1/payment-sessions",
  {
    amount: 1000,
    currency: "KES",
    reference: "ORDER_123",
  },
  {
    headers: {
      Authorization: "Bearer sk_live_yourSecretKeyHere",
    },
  }
);

