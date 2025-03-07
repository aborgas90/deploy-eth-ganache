# SimpleStorage Smart Contract Deployment

This project demonstrates how to deploy and interact with a simple Ethereum smart contract using Ethers.js.

## 📌 Prerequisites
Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [Ganache](https://trufflesuite.com/ganache/) (for local blockchain testing) or an Ethereum testnet (e.g., Sepolia)
- [Metamask](https://metamask.io/) (optional, for managing private keys)

## 🚀 Setup

### 1️⃣ Clone the Repository
```sh
git clone <your-repository-url>
cd <your-project-folder>
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the project root and add the following:
```sh
RPC_URL=<your_ethereum_rpc_url>
PRIVATE_KEY=<your_private_key>
```
- `RPC_URL`: The RPC endpoint of your blockchain (e.g., Ganache or an Ethereum testnet like Sepolia).
- `PRIVATE_KEY`: Your Ethereum wallet private key (make sure **not** to share this!).

### 4️⃣ Compile the Smart Contract
Ensure you have the Solidity compiler installed, then compile your contract:
```sh
npx hardhat compile
```
This will generate `SimpleStorage_sol_SimpleStorage.abi` and `SimpleStorage_sol_SimpleStorage.bin` files.

### 5️⃣ Deploy the Smart Contract
Run the deployment script:
```sh
node deploy.js
```
This will:
- Connect to the blockchain using `ethers.js`
- Deploy the `SimpleStorage` smart contract
- Retrieve and update stored values

### 6️⃣ Interacting with the Contract
Once deployed, the script will:
- Retrieve the initial stored number.
- Update it to `7`.
- Retrieve and print the updated value.

### 7️⃣ (Optional) Run a Local Blockchain
If using **Ganache**, start it and update `RPC_URL` in `.env`:
```sh
npx ganache-cli
```
Then, redeploy using:
```sh
node deploy.js
```

## 🎯 Troubleshooting
- **Error: `Invalid RPC URL`** → Ensure `RPC_URL` is correct.
- **Error: `Private key missing`** → Check `.env` setup.
- **Transaction stuck?** → Check if your blockchain is running.

