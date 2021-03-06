const SimpleToken = artifacts.require('./SimpleToken.sol')

async function mintTokensForGanache(accounts) {
  const simpleToken = await SimpleToken.deployed()
  simpleToken.mint(accounts[5], 1000)
  simpleToken.mint(accounts[6], 1000)
  simpleToken.mint(accounts[7], 1000)
  simpleToken.mint(accounts[8], 1000)
  simpleToken.mint(accounts[9], 1000)

  console.log('Minting tokens to Ganache accounts 5-9')
}

module.exports = function (deployer, network, accounts) {
  deployer.then(() => {
    switch (network) {
      case 'ganache':
        mintTokensForGanache(accounts)
        break

      default:
        throw new Error('No minting function defined for this network')
    }
  }).catch((error) => {
    console.log(error)
  })
}
