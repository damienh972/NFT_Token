const NFT_token = artifacts.require("NFT");

module.exports = function (deployer) {
  deployer.deploy(NFT_token);
};