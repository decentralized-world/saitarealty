const hre = require("hardhat");

async function main() {
  await hre.run("verify:verify", {
    //Deployed contract address
    address: "0xFc30fA4e1dB6B85f52e0182F879f395B07c5C7A9",
    //Pass arguments as string and comma seprated values
    constructorArguments: ["0x7a250d5630b4cf539739df2c5dacb4c659f2488d"],
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