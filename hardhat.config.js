
require('@nomiclabs/hardhat-ethers');

const { privateKey } = require('./secrets.json');

module.exports = {
  solidity: "0.8.18",

  networks: {
    moonbase: {
      url: 'https://rpc.api.moonbase.moonbeam.network',
      chainId: 1287, 
      accounts: [privateKey]
    }
  }
};
