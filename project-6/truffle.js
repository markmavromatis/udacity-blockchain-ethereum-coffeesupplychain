const mnemonic = "pizza reveal during fame wife vendor sustain start close where trade evoke";
const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "<INFURA KEY GOES HERE>";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/${infuraKey}`),
        network_id: 5,       // goerli's id
        gasPrice: 25000000,
    },
  },
  compilers: {
    solc: {
      version: "0.5.16"  // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
 }
};