
const { ethers } = require('hardhat');

async function main() {
    const Contract = await ethers.getContractFactory("Shukuru");

    const contract = await Contract.deploy("Boobs!");

    await contract.deployed();
    
    console.log("Deployed at: ", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
