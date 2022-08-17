const BN = require("ethers").BigNumber;
import { ethers } from "hardhat";

const {
  time, // time
  constants,
} = require("@openzeppelin/test-helpers");
const { factory } = require("typescript");
const ether = require("@openzeppelin/test-helpers/src/ether");

function sleep(ms : any) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
// import { token } from "../typechain/@openzeppelin/contracts";
async function main() {
  const [deployer] = await ethers.getSigners();
  const { chainId } = await ethers.provider.getNetwork();

  const owner = "0x3B60002189E84122Bf4cE66d917eA9f5871557F1";
  const router = "0x7a250d5630b4cf539739df2c5dacb4c659f2488d";
  /**
 @dev Getting contracts for deployment via "ethers.getContractFactory" as we require ethers for deployment
 */
  let Saita = await ethers.getContractFactory("SaitaRealtyV2");
  
  let saita = await Saita.deploy(router, owner);
  console.log("Saita",saita.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//npx hardhat run --network <network name> scripts/deploy.ts