const { ethers } = require("ethers");
const fs = require("fs-extra");
const dotenv = require("dotenv");
dotenv.config();

async function main() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  const encrypted =  wallet.encryptSync(
    process.env.PRIVATE_KEY_PASSWORD,
    process.env.PRIVATE_KEY
  );

  console.log(encrypted);
  fs.writeFileSync('./encryptedKey.json', encrypted)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Error:", error);
    process.exit(1);
  });
