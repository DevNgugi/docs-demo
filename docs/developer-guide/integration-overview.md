---
id: integration-overview
title: Integration Overview
sidebar_position: 1
---

# Integration Overview

Integrating Nairopay Checkout into your application is a two-part process involving both frontend and backend components. This modular design ensures that merchants can offer a seamless and secure payment experience while maintaining flexibility across different tech stacks.

---

## Core Components

### 1. Frontend SDK

The Frontend SDK provides a plug-and-play checkout interface that can be embedded directly into your website or app. It is responsible for:

- Displaying the payment UI
- Collecting and tokenizing payment data
- Redirecting users to mobile money or card verification flows (if applicable)

The SDK is lightweight, customizable, and supports responsive layouts across devices.

**Supported Platforms:**
- JavaScript (Vanilla, React, Vue, Angular)
- Android (Native)
- iOS (Swift)

### 2. Backend API

The Backend API handles sensitive operations and server-side logic, including:

- Creating a payment session
- Verifying completed transactions
- Receiving asynchronous payment callbacks (webhooks)

All communication between your server and Nairopay servers must be authenticated via API keys and transmitted over HTTPS.

---

## Integration Workflow

1. **Initiate Checkout from Frontend**  
   Load the SDK and trigger the checkout flow when a user initiates payment.

2. **Create Payment Session via Backend API**  
   Your backend requests a session token from Nairopay, specifying transaction details (amount, currency, order ID, etc.).

3. **SDK Uses Session to Launch Checkout UI**  
   The session token is passed to the SDK, which displays the appropriate payment options.

4. **User Completes Payment**  
   The customer selects a payment method (e.g. M-Pesa, Airtel Money, card), authorizes the transaction, and is redirected back upon success or failure.

5. **Payment Verification (Backend)**  
   Your server verifies the transaction by calling Nairopay’s `GET /v1/transactions/{txn_id}` endpoint or by listening to webhook events.

6. **Order Fulfillment**  
   Once payment is confirmed, your system can fulfill the order (e.g., ship product, unlock content).

---

## Sandbox Environment

To test without making live payments, use the **Sandbox Mode**:

- All operations simulate real-world flows.
- No actual money is charged.
- Ideal for staging and QA environments.

**Sandbox Base URL:**  
`https://sandbox.api.nairopay.co.ke`

**Production Base URL:**  
`https://api.nairopay.co.ke`

API keys for both environments are available in the Nairopay Merchant Dashboard.

---

## Going Live

Before switching to production:

- Complete business verification (KYC)
- Ensure all webhooks are secure and responding
- Test success, failure, timeout, and retry scenarios
- Use production API keys and endpoints

Once verified and approved, your merchant account will be live and ready to accept payments from real customers.

---
