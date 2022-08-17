const hre = require("hardhat");

async function main() {
  await hre.run("verify:verify", {
    //Deployed contract address
    address: "0xD9c555Cbb7503aCd1578804AEc5e04c187B2f1f3",
    //Pass arguments as string and comma seprated values
    constructorArguments: ["0x7a250d5630b4cf539739df2c5dacb4c659f2488d", "0x3B60002189E84122Bf4cE66d917eA9f5871557F1"],
    //Path of your main contract.
    contract: "contracts/saita.sol:SaitaRealtyV2",
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//npx hardhat run --network rinkeby  scripts/verify.ts