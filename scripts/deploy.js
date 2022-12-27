// scripts/deploy.js

const hre = require("hardhat");

async function main() {
    // We get the contract to deploy.
    const Writeup = await hre.ethers.getContractFactory("WritersPoint");
    const WriteupContract = await Writeup.deploy();
    await WriteupContract.deployed();
    console.log("Contract WritersPoint", WriteupContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });