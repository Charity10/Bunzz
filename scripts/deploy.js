const { ethers } = require("hardhat");


async function main() {

  const NFTMarketPlaceContract = await ethers.getContractFactory("NFTMarketPlace");

  const deployedNFTMarketPlaceContract = await NFTMarketPlaceContract.deploy();

  await deployedNFTMarketPlaceContract.deployed();

  console.log("NFTMarketPlace Contract Address:", deployedNFTMarketPlaceContract.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
