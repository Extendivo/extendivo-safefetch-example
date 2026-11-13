# Extendivo SafeFetch x402 Example

Minimal Node.js example for calling the Extendivo SafeFetch API with automatic x402 payment.

SafeFetch lets AI agents fetch public web pages without directly trusting arbitrary web content.

## Features

- SSRF-safe HTTP/HTTPS fetching
- DNS resolution and IP validation
- Redirect revalidation
- Clean text extraction
- Metadata and link extraction
- Local prompt-injection risk signals
- Optional semantic prompt-injection detection
- x402 pay-per-request
- No API key
- No subscription

## Endpoints

### SafeFetch

`POST https://api.extendivo.com/v1/safe-fetch`

Price: **$0.005 USDC per request**

### SafeFetch Secure

`POST https://api.extendivo.com/v1/safe-fetch-secure`

Price: **$0.015 USDC per request**

The secure endpoint adds semantic prompt-injection detection and combined risk scoring.

Payments use **x402 V2 with USDC on Base mainnet**.

## Requirements

- Node.js
- A Base-compatible wallet
- USDC on Base for x402 payments

## Install

```bash
npm install
```

## Configure

Copy the example environment file:

```bash
cp .env.example .env
```

Then add your wallet private key:

```text
PRIVATE_KEY=0xYOUR_PRIVATE_KEY_HERE
```

Never commit your `.env` file or private key.

## Run

```bash
node index.mjs
```

The example automatically handles the x402 payment flow and calls:

`https://api.extendivo.com/v1/safe-fetch`

with:

```json
{
  "url": "https://www.w3.org/"
}
```

## API documentation

https://api.extendivo.com/docs/

## OpenAPI

https://api.extendivo.com/openapi.json

## Website

https://extendivo.com/
