export const features = [
  {
    icon: 'code-square-one',
    title: 'Write Less Code',
    content: 'Write less code and plug in your own Web3 provider. Get complete access to all DeFi cover features.'
  },
  {
    icon: 'bell-02',
    title: 'Use Anywhere',
    content: 'Built on Typescript, the Cover SDK works on both frontend and backend environments, on any framework.'
  },
  {
    icon: 'chart-breakout-square',
    title: 'Attract Liquidity',
    content: 'With our support, you can get more visibility to bootstrap liquidity into your own DeFi cover pool.'
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

export const codeSnippetHtml = `<div data-line=" " class="line"></span>
</div><div data-line="1" class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ChainId<span class="token punctuation">,</span> liquidity <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@neptunemutual/sdk'</span>
</div><div data-line="2" class="line">
</div><div data-line="3" class="line"><span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
</div><div data-line="4" class="line">  <span class="token keyword">const</span> amount <span class="token operator">=</span> <span class="token number">150_000</span> <span class="token operator">*</span> <span class="token number">1e18</span>
</div><div data-line="5" class="line">
</div><div data-line="6" class="line">  <span class="token comment">// First approve the Policy contract to spend your DAI</span>
</div><div data-line="7" class="line">  <span class="token keyword">await</span> liquidity<span class="token punctuation">.</span><span class="token function">approve</span><span class="token punctuation">(</span>ChainId<span class="token punctuation">.</span>Kovan<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span> amount <span class="token punctuation">}</span><span class="token punctuation">)</span>
</div><div data-line="8" class="line">
</div><div data-line="9" class="line">  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> liquidity<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>ChainId<span class="token punctuation">.</span>Kovan<span class="token punctuation">,</span> key<span class="token punctuation">,</span> amount<span class="token punctuation">)</span>
</div><div data-line="10" class="line">  console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
</div><div data-line="11" class="line"><span class="token punctuation">}</span>
</div><div data-line="12" class="line">
</div><div data-line="13" class="line"><span class="token comment">/*******************************************************************</span>
</div><div data-line="14" class="line"><span class="token comment">[info] {</span>
</div><div data-line="15" class="line"><span class="token comment">  status: 'Success',</span>
</div><div data-line="16" class="line"><span class="token comment">  result: {</span>
</div><div data-line="17" class="line"><span class="token comment">    nonce: 1,</span>
</div><div data-line="18" class="line"><span class="token comment">    gasPrice: BigNumber { _hex: '0x06fc23ac00', _isBigNumber: true },</span>
</div><div data-line="19" class="line"><span class="token comment">    wait: [Function (anonymous)]</span>
</div><div data-line="20" class="line"><span class="token comment">  }</span>
</div><div data-line="21" class="line"><span class="token comment">}</span>
</div><div data-line="22" class="line"><span class="token comment">*******************************************************************/</span>
</div><div data-line=" " class="line"></span>
</div>`
