---

id: sandbox
title: Sandbox Environment
sidebar_position: 7
--------------------

# Sandbox Environment

The Nairopay sandbox environment allows you to simulate real payment flows without processing actual transactions. It's ideal for testing integrations, UI flows, and webhook handling before going live.

---

## Base API URL

```bash
https://sandbox-api.nairopay.com
```

Use this endpoint instead of the live API during development.

---

## Test Credentials

Use the following test card details when simulating transactions:

| Field       | Value                 |
| ----------- | --------------------- |
| Card Number | `4111 1111 1111 1111` |
| Expiry Date | `12/34`               |
| CVV         | `123`                 |

> These values will never trigger real charges. You can reuse them for multiple test cases.

---

## API Keys

Nairopay provides separate keys for sandbox and live environments:

| Environment | Public Key Prefix | Secret Key Prefix |
| ----------- | ----------------- | ----------------- |
| Sandbox     | `pk_test_`        | `sk_test_`        |
| Production  | `pk_live_`        | `sk_live_`        |

* Always use `sk_test_` keys when working in the sandbox.
* Calls made with live keys to the sandbox URL will fail, and vice versa.

---

## Recommendations

* Use sandbox mode for end-to-end testing including session creation, payment, and webhook flows.
* Verify responses and error handling in various scenarios (e.g., insufficient funds, network errors).
* Simulate success and failure by varying request data or network status.

---

## Related Guides

* [Creating a Payment Session](./creating-payment-session.md)
* [Verifying Payment](./verifying-payment.md)
* [Handling Webhooks](./webhooks.md)
