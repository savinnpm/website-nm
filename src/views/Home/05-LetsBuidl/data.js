export const features = [
  {
    icon: 'code-square-one',
    title: 'WRITE_LESS_CODE',
    content: 'WRITE_LESS_CODE_DESC'
  },
  {
    icon: 'bell-02',
    title: 'USE_ANYWHERE',
    content: 'USE_ANYWHERE_DESC'
  },
  {
    icon: 'chart-breakout-square',
    title: 'ATTRACT_LIQUIDITY',
    content: 'ATTRACT_LIQUIDITY_DESC'
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
