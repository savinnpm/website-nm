import { Command } from './Command'
import { DownloadButton } from './DownloadButton'
import { UnorderedList } from './UnorderedList'

const links = {
  SDK: 'https://www.npmjs.com/package/@neptunemutual/sdk',
  DISCORD: 'https://discord.gg/2qMGTtJtnW',
  BLOG: 'https://blog.neptunemutual.com/',
  DOCUMENTATION: 'https://docs.neptunemutual.com/',
  PRIVACY_POLICY: 'https://docs.neptunemutual.com/usage/privacy-policy',
  TERMS_OF_USE: 'https://docs.neptunemutual.com/usage/terms-of-use',
  FAUCET: 'https://faucet.neptunemutual.com/',
  LIGHTPAPER: '/files/lightpaper.v1.pdf',
  TESTNET: 'https://test.neptunemutual.com/',
  CONTACT: 'https://forms.clickup.com/f/6vvfh-4624/UVJHEDAS2T3P6DCFJM'
}

export const data = [
  {
    name: <>The Idea</>,
    DescComponent: () => {
      return (
        <>
          <p>
            Blockchain-based covers have a low claims-to-payout ratio. Existing cover products are unscalable, discretionary, and discriminatory. Smart contract audits do not guarantee security. Attacks on exchanges, metaverses, DApps, and DeFi protocols are increasing and getting more sophisticated.
          </p>

          <p>
            We saw a growing need for security and reliable covers that inspired us to create Neptune Mutual.
          </p>
        </>
      )
    }
  },
  {
    name: <>Product Design</>,
    DescComponent: () => {
      return (
        <>
          <p>
            Four key principles drive the design of Neptune Mutual\'s cover protocol:
          </p>

          <UnorderedList items={[
            'Security',
            'Minimizing risk',
            'Scalability',
            'User Experience (UX)'
          ]}
          />
        </>
      )
    }
  },
  {
    name: <>Token Design</>,
    DescComponent: () => {
      return (
        <>
          <p>
            Neptune Mutual's Lightpaper gives detailed information on our NPM token design and usage. Here are key points to take not of:
          </p>

          <UnorderedList items={[
            'There is a fixed supply of 1 billion NPM tokens.',
            'The minting of NPM tokens will have a timeframe of 6 years.',
            'NPM tokes are mainly used for our incident resolution reporting mechanism including other functions of the protocol such as creating a cover.'
          ]}
          />
        </>
      )
    }
  },
  {
    name: <>Product MVP</>,
    DescComponent: () => {
      return (
        <>
          <p>
            All participants of the Neptune Mutual ecosystem will get a comprehensive documentation that helps with understanding the different aspects of the Neptune Mutual protocol.
          </p>

          <DownloadButton text='View the Lightpaper' link={links.LIGHTPAPER} />
        </>
      )
    }
  },
  {
    name: <>Cover SDK Beta</>,
    DescComponent: () => {
      return (
        <>
          <p>
            Check out the Cover SDK source code on the Neptune Mutual Github repository. <a target='_blank' rel='noreferrer' href={links.SDK}>Read the SDK documentation</a> to find out how to get access to cover feature on your own frontend app or backend API.Built on Typescript, developers can use the SDK in both frontend and backend environments using any popular framework. The SDK is also available as an NPM package.
          </p>

          <Command text='npm install @neptunemutual/sdk' />
        </>
      )
    }
  },
  {
    name: <>Incorporation & Legal</>,
    DescComponent: () => {
      return (
        <p>
          In September 2021, we incorporated legal entities to support the fundraising, development, recruitment, expansion, and operational demand of the Neptune Mutual protocol.
        </p>
      )
    }
  },
  {
    name: <>Fundraising & Team Building</>,
    DescComponent: () => {
      return (
        <>
          <p>
            Neptune Mutual successfully closed its Seed Round backed by industry leaders including Fenbushi and Coinbase Ventures. Soon after, Animoca Brands led the subsequent investment round and has been joined by an impressive list of investors.
          </p>

          <p>
            Neptune Mutual has grown quickly from 3 cofounders to a team of over 25, based in countries across the world.
          </p>
        </>
      )
    }
  },
  {
    name: <>Protocol Testnet Launch</>,
    DescComponent: () => {
      return (
        <p>
          The Neptune Mutual protocol launches on a couple of test networks like Kovan and Binance Smart Chain Testnet. Community members participate in the protocol by becoming cover purchasers,  liquidity providers, and concensus witenesses. We develop <a target='_blank' rel='noreferrer' href={links.FAUCET}>Neptune Mutual faucet</a> to provide users with testnet DAI and NPM tokens.
        </p>
      )
    }
  },
  {
    name: <>Protocol Audit & Launch</>,
    DescComponent: () => {
      return (
        <p>The Neptune Mutual Protocol V1 gets audited by a highly-sophisticated security research company or group. The protocol gets improved over time through bug-bounty programs and continous security reviews conducted by independent researchers.</p>
      )
    }
  },
  {
    name: <>SDK Audit & Launch</>,
    DescComponent: () => {
      return (
        <>
          <p>
            Neptune Mutual SDK undergoes a strict internal security audit before it becomes available for public use.
          </p>

          <p>
            Furthermore, the app, Github, hosting, CI/CD pipelines, DNS, HTTP security, and more is thoroughly audited as well. A proper cyber hygine is implemented across the team and organization.
          </p>
        </>
      )
    }
  },
  {
    name: <>Aggregated Policies (v2)</>,
    current: true,
    DescComponent: () => {
      return (
        <p>
          This upgrade enables multiple policies to be aggregated under a single cover pool providing larger DeFi and Meta projects an ability to secure their portfolio of smaller DApps.
        </p>
      )
    }
  },
  // {
  //   name: <>Security Analytics Dashboard</>,
  //   DescComponent: () => {
  //     return (
  //       <p>
  //         Based on the-then demand, the Neptune Mutual team partners with blockchain security experts, groups, and companies to “conceptualize” a brand new security analytics service exclusively for our portfolio projects. The dashboard will be based on production smart contract security.
  //       </p>
  //     )
  //   }
  // },
  {
    name: <>Security Scorecards & Widgets</>,
    DescComponent: () => {
      return (
        <p>
          As the next iteration and ehnacements to the dashboard solution, Neptune Mutual also scores the security posture of our portfolio DeFi projects and apps. The score rating can be used on any external website by simply copying and pasting a few lines of code.
        </p>
      )
    }
  },
  {
    name: <>To Be Announced</>,
    DescComponent: () => {
      return (
        <p>
          As the industry evolves and matures further, Neptune Mutual creates even more products, apps, and services to remain relevant in the space and continously innovate.
        </p>
      )
    }
  }
]
