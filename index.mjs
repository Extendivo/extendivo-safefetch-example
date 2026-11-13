import "dotenv/config";
import { privateKeyToAccount } from "viem/accounts";
import { x402Client, wrapFetchWithPayment } from "@x402/fetch";
import { registerExactEvmScheme } from "@x402/evm/exact/client";

if (!process.env.PRIVATE_KEY) {
  throw new Error("Missing PRIVATE_KEY in .env");
}

const signer = privateKeyToAccount(process.env.PRIVATE_KEY);

const client = new x402Client();
registerExactEvmScheme(client, { signer });

const x402Fetch = wrapFetchWithPayment(fetch, client);

const response = await x402Fetch(
  "https://api.extendivo.com/v1/safe-fetch",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: "https://www.w3.org/",
    }),
  }
);

console.log("HTTP:", response.status);

const body = await response.json();
console.log(JSON.stringify(body, null, 2));
