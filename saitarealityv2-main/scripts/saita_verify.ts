const hre = require("hardhat");

async function main() {
  await hre.run("verify:verify", {
    //Deployed contract address
    address: "0x2988E201a01E49a0995f85Ea6E2578F9Fece9A61",
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