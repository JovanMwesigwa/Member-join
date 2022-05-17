
const { ALCHEMY_URL, CONTRACT_ADDRESS, PRIVATE_KEY } = process.env
const { ethers } = require('hardhat');

// ABI
const contractABI = require("../artifacts/contracts/Shukuru.sol/Shukuru.json");

// provider
const provider = new ethers.providers.JsonRpcProvider(ALCHEMY_URL);

// signer
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

// contract
const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI.abi, signer);

async function main() {
    // interact with the contract
    const count = await contract.count();
    console.log("Count: ", count);

    // join member
    const tx = await contract.join("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "One Toofa", 26);
    await tx.wait()
    console.log("Mining....")

    // get all members
    const members = await contract.getAllMembers() 
    console.log("Members->", members);

    // interact with the contract
    const newCount = await contract.count();
    console.log("New Count: ", newCount);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });