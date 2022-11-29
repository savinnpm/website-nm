export const features = [
  {
    icon: "placeholder",
    title: "Write Less Code",
    content: "Write less code and plug in your own Web3 provider. Get complete access to all DeFi cover features."
  },
  {
    icon: "placeholder",
    title: "Use Anywhere",
    content: "Built on Typescript, the Cover SDK works on both frontend and backend environments, on any framework."
  },
  {
    icon: "placeholder",
    title: "Attract Liquidity",
    content: "With our support, you can get more visibility to bootstrap liquidity into your own DeFi cover pool."
  }
]

export const codeSnippet = `import { ChainId, liquidity } from '@neptunemutual/sdk'

const add = async () => {
  const amount = 150_000 * 1e18

  // First approve the Policy contract to spend your DAI
  await liquidity.approve(ChainId.Kovan, key, { amount })

  const response = await liquidity.add(ChainId.Kovan, key, amount)
  console.info(response)
}

/*******************************************************************
[info] {
  status: 'Success',
  result: {
    nonce: 1,
    gasPrice: BigNumber { _hex: '0x06fc23ac00', _isBigNumber: true },
    wait: [Function (anonymous)]
  }
}
*******************************************************************/
`