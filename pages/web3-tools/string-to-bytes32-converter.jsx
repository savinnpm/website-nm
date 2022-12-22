import Head from 'next/head'
import { ToolsDetail } from '../../src/views/ToolsDetail/index.jsx'

export default function Web3Pages () {
  return (
    <>
      <Head>
        <title>String to Bytes32 converter</title>
        <link rel='icon' href='/favicon.ico' />

      </Head>

      <main>
        <ToolsDetail />
      </main>
    </>
  )
}
