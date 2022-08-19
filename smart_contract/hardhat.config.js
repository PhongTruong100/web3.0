// https://eth-goerli.g.alchemy.com/v2/gYe_PbmUvpRcwgupPznTNj9TmUCiqxoV
require ('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/gYe_PbmUvpRcwgupPznTNj9TmUCiqxoV',
      accounts:['ce181d2a8e66528514f4d6907f979528fb6bd254470ad271042e896e2db94f67']
    }
  }
}