const { ethers } = require("ethers");
const fs = require("fs-extra");
const dotenv = require('dotenv')
dotenv.config()

async function main() {
  // 🔹 Connect to Ganache running on Windows (Ensure it's reachable from WSL)
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

  // 🔹 Create a wallet with a private key and connect to provider
  const wallet = new ethers.Wallet(
    process.env.PRIVATE_KEY,
    provider
  );

  // 🔹 Load contract ABI and Bytecode
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const bin = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");

  // 🔹 Deploy Contract
  const contractFactory = new ethers.ContractFactory(abi, bin, wallet);
  console.log("Deploying, please wait ...");
  const contract = await contractFactory.deploy();
  const deployReceipt = await contract.deploymentTransaction().wait(1);

  //sepolia chain id : 11155111
  console.log("✅ Contract Deployed!");
  // console.log("📍 Address:", contract.target);
  // console.log("🗞️ Transaction Receipt:", contract.deploymentTransaction());
  // console.log("📜 Transaction Hash:", deployReceipt.transactionHash);
  const currentFavoriteNumber = await contract.retrieve();
  console.log(`"Retrieve : ${currentFavoriteNumber.toString()}`)

  const transactionResponse = await contract.store("7") 
  const transactionReceipt = await transactionResponse.wait(1)
  const updateFavoriteNumber = await contract.retrieve()
  console.log(updateFavoriteNumber.toString()) //to make sure reeadable 
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Error:", error);
    process.exit(1);
  });
