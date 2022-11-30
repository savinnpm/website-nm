import { storeLocally } from '../services/io/download'

const audits = {
  data: [
    {
      id: 1,
      attributes: {
        heading: 'Blocksec',
        title: 'Blocksec Protocol Audit Report',
        partner: 'Blocksec',
        badges: [
          {
            size: 'md',
            text: 'Smart Contract',
            color: 'rose'
          }
        ],
        report: `${process.env.FILE_URL_PREFIX}001-blocksec.pdf`,
        start: '2022-08-01',
        end: '2022-10-24',
        description: "<p>We are delighted to share the results of our first protocol security audit by Blocksec, which was completed in July 2022. The main objectives were: - Detecting and addressing critical smart contract vulnerabilities affecting our decentralized insurance protocol (DAC) network; - Identifying potential issues for DAC clients/services implementing an external DAO token pool based on ERC20 tokens provided under a future initiative from us); &amp; This study identified more than 300 points of vulnerability regarding blockchains technologies such as Ethereum's scalability proposal or Bitcoin's scaling roadmap that is currently being implemented during this process. We have prepared some sample applications using these findings available here so you can see what they could be affected if your code runs against those features at scale!</p>",
        createdAt: '2022-11-24T05:40:06.309Z',
        updatedAt: '2022-11-24T05:43:55.544Z',
        publishedAt: '2022-11-24T05:43:55.334Z'
      }
    },
    {
      id: 2,
      attributes: {
        heading: 'Open Zeppelin',
        title: 'Open Zeppelin Audit Report',
        partner: 'Open Zeppelin',
        badges: [
          {
            size: 'md',
            text: 'Smart Contract',
            color: 'rose'
          }
        ],
        report: `${process.env.FILE_URL_PREFIX}002-open-zeppelin.pdf`,
        start: '2022-11-01',
        end: '2023-11-16',
        description: '<p>We have always prioritized security from the beginning. We studied a number of audit firms, their adoption, and track records when looking for a new smart contract audit partner. The contribution of OpenZeppelin to open source has helped the whole Ethereum community, and their support paves the way for a more secure DeFi industry. We chose OpenZeppelin because of their track record, outstanding reputation, and commitment to the Ethereum ecosystem.</p>',
        createdAt: '2022-11-24T05:41:58.195Z',
        updatedAt: '2022-11-24T05:44:07.057Z',
        publishedAt: '2022-11-24T05:44:06.846Z'
      }
    },
    {
      id: 3,
      attributes: {
        heading: 'Cyraacs',
        title: 'SDK Security Review',
        partner: 'Cyraacs',
        badges: [
          {
            size: 'md',
            text: 'SDK',
            color: 'purple'
          }
        ],
        report: `${process.env.FILE_URL_PREFIX}001-blocksec.pdf`,
        start: '2022-11-01',
        end: '2023-11-16',
        description: '<p>We have always prioritized security from the beginning. We studied a number of audit firms, their adoption, and track records when looking for a new smart contract audit partner. The contribution of OpenZeppelin to open source has helped the whole Ethereum community, and their support paves the way for a more secure DeFi industry. We chose OpenZeppelin because of their track record, outstanding reputation, and commitment to the Ethereum ecosystem.</p>',
        createdAt: '2022-11-24T05:42:45.978Z',
        updatedAt: '2022-11-24T05:44:18.908Z',
        publishedAt: '2022-11-24T05:44:18.697Z'
      }
    },
    {
      id: 4,
      attributes: {
        heading: 'Cyraacs',
        title: 'Frontend Penetration Test',
        partner: 'Cyraacs',
        badges: [
          {
            size: 'md',
            text: 'Frontend',
            color: 'blue-light'
          }
        ],
        report: `${process.env.FILE_URL_PREFIX}001-blocksec.pdf`,
        start: '2022-11-01',
        end: '2023-11-16',
        description: '<p>We have always prioritized security from the beginning. We studied a number of audit firms, their adoption, and track records when looking for a new smart contract audit partner. The contribution of OpenZeppelin to open source has helped the whole Ethereum community, and their support paves the way for a more secure DeFi industry. We chose OpenZeppelin because of their track record, outstanding reputation, and commitment to the Ethereum ecosystem.</p>',
        createdAt: '2022-11-24T05:43:18.602Z',
        updatedAt: '2022-11-24T05:44:33.650Z',
        publishedAt: '2022-11-24T05:44:33.441Z'
      }
    }
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 4
    }
  }
}

export const getAudits = async () => {
  const list = audits.data

  return Promise.all(list.map(async item => {
    const localFile = await storeLocally(item.attributes.report, 'audits')

    return {
      ...item,
      attributes: {
        ...item.attributes,
        report: localFile
      }
    }
  }))
}
