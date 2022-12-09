import Image from 'next/image'
import { useRef } from 'react'
import Slider from 'react-slick'
import styled, { useTheme } from 'styled-components'

const coinbaseImg = '/assets/images/partners/coinbase.webp'
const huobiImg = '/assets/images/partners/huobi.webp'
const okxImg = '/assets/images/partners/okx.webp'
const gravityImg = '/assets/images/partners/gravity.webp'
const hextrust = '/assets/images/partners/hextrust.webp'
const gsr = '/assets/images/partners/gsr.webp'
const fundamentalLabs = '/assets/images/partners/fundamental-labs.webp'
const gbv = '/assets/images/partners/gbv.webp'
const cambiumGrove = '/assets/images/partners/cambium-grove.webp'
const xt = '/assets/images/partners/xt.webp'
const bitmart = '/assets/images/partners/bitmart.webp'
const gate = '/assets/images/partners/gate.webp'
const newvision = '/assets/images/partners/new-vision.webp'
const baboonvc = '/assets/images/partners/baboonvc.webp'
const pacific = '/assets/images/partners/pacific-century.webp'
const titans = '/assets/images/partners/titans-ventures.webp'
const mhventures = '/assets/images/partners/mh-ventures.webp'
const cabinvc = '/assets/images/partners/cabinvc.webp'
const redlineDao = '/assets/images/partners/redline-dao.webp'
const dweb3 = '/assets/images/partners/dweb3-capital.webp'
const alphabit = '/assets/images/partners/alphabit.webp'
const mapleblock = '/assets/images/partners/mapleblock.webp'
const ldcapital = '/assets/images/partners/ld-capital.webp'
const dwflabs = '/assets/images/partners/dwf-labs.webp'
const twoacrypto = '/assets/images/partners/2a-crypto.webp'
const barmy = '/assets/images/partners/barmy.webp'
const vespertine = '/assets/images/partners/vespertine-capital.webp'
const htr = '/assets/images/partners/htr-group.webp'
const smo = '/assets/images/partners/smo.webp'
const pulsar = '/assets/images/partners/pulsar-trading.webp'
const gts = '/assets/images/partners/gts-ventures.webp'
const qudax = '/assets/images/partners/qudax.webp'
const lux = '/assets/images/partners/lux-capital.webp'
const icopantera = '/assets/images/partners/ico-pantera.webp'
const bbs = '/assets/images/partners/bbs-finance.webp'
const avstar = '/assets/images/partners/avstar-capital.webp'

const coinbaseImgDark = '/assets/images/partners/darkmode/coinbase.webp'
const huobiImgDark = '/assets/images/partners/darkmode/huobi.webp'
const okxImgDark = '/assets/images/partners/darkmode/okx.webp'
const gravityImgDark = '/assets/images/partners/darkmode/gravity.webp'
const hextrustDark = '/assets/images/partners/darkmode/hextrust.webp'
const gsrDark = '/assets/images/partners/darkmode/gsr.webp'
const fundamentalLabsDark = '/assets/images/partners/darkmode/fundamental-labs.webp'
const gbvDark = '/assets/images/partners/darkmode/gbv.webp'
const cambiumGroveDark = '/assets/images/partners/darkmode/cambium-grove.webp'
const xtDark = '/assets/images/partners/darkmode/xt.webp'
const bitmartDark = '/assets/images/partners/darkmode/bitmart.webp'
const gateDark = '/assets/images/partners/darkmode/gate.webp'
const newvisionDark = '/assets/images/partners/darkmode/new-vision.webp'
const baboonvcDark = '/assets/images/partners/darkmode/baboonvc.webp'
const pacificDark = '/assets/images/partners/darkmode/pacific-century.webp'
const titansDark = '/assets/images/partners/darkmode/titans-ventures.webp'
const mhventuresDark = '/assets/images/partners/darkmode/mh-ventures.webp'
const cabinvcDark = '/assets/images/partners/darkmode/cabinvc.webp'
const redlineDaoDark = '/assets/images/partners/darkmode/redline-dao.webp'
const dweb3Dark = '/assets/images/partners/darkmode/dweb3-capital.webp'
const alphabitDark = '/assets/images/partners/darkmode/alphabit.webp'
const mapleblockDark = '/assets/images/partners/darkmode/mapleblock.webp'
const ldcapitalDark = '/assets/images/partners/darkmode/ld-capital.webp'
const dwflabsDark = '/assets/images/partners/darkmode/dwf-labs.webp'
const twoacryptoDark = '/assets/images/partners/darkmode/2a-crypto.webp'
const barmyDark = '/assets/images/partners/darkmode/barmy.webp'
const vespertineDark = '/assets/images/partners/darkmode/vespertine-capital.webp'
const htrDark = '/assets/images/partners/darkmode/htr-group.webp'
const smoDark = '/assets/images/partners/darkmode/smo.webp'
const pulsarDark = '/assets/images/partners/darkmode/pulsar-trading.webp'
const gtsDark = '/assets/images/partners/darkmode/gts-ventures.webp'
const qudaxDark = '/assets/images/partners/darkmode/qudax.webp'
const luxDark = '/assets/images/partners/darkmode/lux-capital.webp'
const icopanteraDark = '/assets/images/partners/darkmode/ico-pantera.webp'
const bbsDark = '/assets/images/partners/darkmode/bbs-finance.webp'
const avstarDark = '/assets/images/partners/darkmode/avstar-capital.webp'

const carouselItemsDark = [
  {
    name: 'Coinbase Ventures',
    imgSrc: coinbaseImgDark
  },
  {
    name: 'Huobi Ventures',
    imgSrc: huobiImgDark
  },
  {
    name: 'OKX',
    imgSrc: okxImgDark
  },
  {
    name: 'GravityX',
    imgSrc: gravityImgDark
  },
  {
    name: 'Hex Trust',
    imgSrc: hextrustDark
  },
  {
    name: 'GSR',
    imgSrc: gsrDark
  },
  {
    name: 'Fundamental Labs',
    imgSrc: fundamentalLabsDark
  },
  {
    name: 'GBV',
    imgSrc: gbvDark
  },
  {
    name: 'Cambium Grove',
    imgSrc: cambiumGroveDark
  },
  {
    name: 'XT.com',
    imgSrc: xtDark
  },
  {
    name: 'BitMart',
    imgSrc: bitmartDark
  },
  {
    name: 'Gate.io',
    imgSrc: gateDark
  },
  {
    name: 'New Vision',
    imgSrc: newvisionDark
  },
  {
    name: 'Baboon VC',
    imgSrc: baboonvcDark
  },
  {
    name: 'Pacific Century Group',
    imgSrc: pacificDark
  },
  {
    name: 'Titans',
    imgSrc: titansDark
  },
  {
    name: 'MH Ventures',
    imgSrc: mhventuresDark
  },
  {
    name: 'Cabin VC',
    imgSrc: cabinvcDark
  },
  {
    name: 'Redline DAO',
    imgSrc: redlineDaoDark
  },
  {
    name: 'DWEB3',
    imgSrc: dweb3Dark
  },
  {
    name: 'Alphabit',
    imgSrc: alphabitDark
  },
  {
    name: 'Maple Block',
    imgSrc: mapleblockDark
  },
  {
    name: 'LD Capital',
    imgSrc: ldcapitalDark
  },
  {
    name: 'DWF Labs',
    imgSrc: dwflabsDark
  },
  {
    name: '2A crypto',
    imgSrc: twoacryptoDark
  },
  {
    name: 'Barmy',
    imgSrc: barmyDark
  },
  {
    name: 'Vespertine Capital',
    imgSrc: vespertineDark
  },
  {
    name: 'Htr Group',
    imgSrc: htrDark
  },
  {
    name: 'SMO',
    imgSrc: smoDark
  },
  {
    name: 'Pulsar',
    imgSrc: pulsarDark
  },
  {
    name: 'Gts Ventures',
    imgSrc: gtsDark
  },
  {
    name: 'Qudax',
    imgSrc: qudaxDark
  },
  {
    name: 'Lux',
    imgSrc: luxDark
  },
  {
    name: 'Ico Panters',
    imgSrc: icopanteraDark
  },
  {
    name: 'BBS Finance',
    imgSrc: bbsDark
  },
  {
    name: 'AV Star Capital',
    imgSrc: avstarDark
  }
]

const carouselItemsLight = [
  {
    name: 'Coinbase Ventures',
    imgSrc: coinbaseImg
  },
  {
    name: 'Huobi Ventures',
    imgSrc: huobiImg
  },
  {
    name: 'OKX',
    imgSrc: okxImg
  },
  {
    name: 'GravityX',
    imgSrc: gravityImg
  },
  {
    name: 'Hex Trust',
    imgSrc: hextrust
  },
  {
    name: 'GSR',
    imgSrc: gsr
  },
  {
    name: 'Fundamental Labs',
    imgSrc: fundamentalLabs
  },
  {
    name: 'GBV',
    imgSrc: gbv
  },
  {
    name: 'Cambium Grove',
    imgSrc: cambiumGrove
  },
  {
    name: 'XT.com',
    imgSrc: xt
  },
  {
    name: 'BitMart',
    imgSrc: bitmart
  },
  {
    name: 'Gate.io',
    imgSrc: gate
  },
  {
    name: 'New Vision',
    imgSrc: newvision
  },
  {
    name: 'Baboon VC',
    imgSrc: baboonvc
  },
  {
    name: 'Pacific Century Group',
    imgSrc: pacific
  },
  {
    name: 'Titans',
    imgSrc: titans
  },
  {
    name: 'MH Ventures',
    imgSrc: mhventures
  },
  {
    name: 'Cabin VC',
    imgSrc: cabinvc
  },
  {
    name: 'Redline DAO',
    imgSrc: redlineDao
  },
  {
    name: 'DWEB3',
    imgSrc: dweb3
  },
  {
    name: 'Alphabit',
    imgSrc: alphabit
  },
  {
    name: 'Maple Block',
    imgSrc: mapleblock
  },
  {
    name: 'LD Capital',
    imgSrc: ldcapital
  },
  {
    name: 'DWF Labs',
    imgSrc: dwflabs
  },
  {
    name: '2A crypto',
    imgSrc: twoacrypto
  },
  {
    name: 'Barmy',
    imgSrc: barmy
  },
  {
    name: 'Vespertine Capital',
    imgSrc: vespertine
  },
  {
    name: 'Htr Group',
    imgSrc: htr
  },
  {
    name: 'SMO',
    imgSrc: smo
  },
  {
    name: 'Pulsar',
    imgSrc: pulsar
  },
  {
    name: 'Gts Ventures',
    imgSrc: gts
  },
  {
    name: 'Qudax',
    imgSrc: qudax
  },
  {
    name: 'Lux',
    imgSrc: lux
  },
  {
    name: 'Ico Panters',
    imgSrc: icopantera
  },
  {
    name: 'BBS Finance',
    imgSrc: bbs
  },
  {
    name: 'AV Star Capital',
    imgSrc: avstar
  }
]

export const BrandCarousel = () => {
  const { isLightMode } = useTheme()

  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    rows: 1,
    centerMode: false,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }
    ],
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false
  }

  const slidesToMap = isLightMode ? carouselItemsLight : carouselItemsDark

  return (
    <LogosContainer>
      <Slider
        ref={sliderRef}
        {...settings}
      >

        {slidesToMap.map((brand, idx) => {
          return (
            <div key={idx}>
              <Image src={brand.imgSrc} alt={brand.name + ' Logo'} width={230} height={64} />
            </div>
          )
        })}
      </Slider>
    </LogosContainer>
  )
}

const LogosContainer = styled.div`
  margin-top:64px;
  display:flex;
  gap:14px;
  flex-wrap: wrap;
  width: 100%;

  .slick-slider{
    width:100%;
  }

  .slick-track {
    display: flex !important;
  }

  .slick-list {
    margin: 0 -16px;
  }

  .slick-slide img{
    object-fit: contain;
  }
`
