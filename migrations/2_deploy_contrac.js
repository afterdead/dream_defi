const dreamTk = artifacts.require("DreamToken.sol");
const masterchef = artifacts.require('MasterChefV2.sol');
const adminAddress = '0x850CbaD2aDb1484540f9315d45b086d7FDD00400';
module.exports = async function(deployer) {
  await deployer.deploy(dreamTk);
  dreamTk.deployed().then(ins => {
    console.log(ins);
  })
  // await deployer.deploy(masterchef, dreamTk, adminAddress, adminAddress, 1000 ** 18, 0);
};