import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { Button } from '../../../components/Button'
import { Checkbox } from '../../../components/Checkbox'
import { Icon } from '../../../components/Icon'
import { InputWithLabel } from '../../../components/InputWithLabel'
import { TextArea } from '../../../components/TextArea'
import { publicEnv } from '../../../environment'
import { FormOptions } from './FormOptions'
import { FormSelector } from './FormSelector'
import { validateForm } from './validateForm'

export const purposeOptions = [
  { text: 'Choose your reason for contacting us', value: '' },
  { text: 'Providing Liquidity', value: 'providing-liquidity', iconVariant: 'chart-breakout-square' },
  { text: 'Purchasing Policy', value: 'purchasing-policy', iconVariant: 'shield-tick' },
  { text: 'Creating Cover', value: 'creating-cover', iconVariant: 'folder-plus' },
  { text: 'Media Reachout', value: 'creating-cover', iconVariant: 'message-dots-circle' },
  { text: 'Other', value: 'other', iconVariant: 'edit-03' }
]

export const contactMethodOptions = [
  { text: 'Tell us how we should respond to you', value: '' },
  { text: 'Email', value: 'email', iconVariant: 'mail-02' },
  { text: 'Telegram', value: 'telegram', iconVariant: 'telegram' },
  { text: 'Phone/Whatsapp', value: 'phone', iconVariant: 'phone-01' },
  { text: 'Other', value: 'other', iconVariant: 'edit-03' }
]

export const roleOptions = [
  { text: 'Choose the most relevant role', value: '' },
  { text: 'Business Development', value: 'business-development', iconVariant: 'lightbulb-03' },
  { text: 'Sale', value: 'sale', iconVariant: 'line-chart-up-03' },
  { text: 'Blockchain Developer', value: 'blockchain-developer', iconVariant: 'code-square-one' },
  { text: 'Co-founder/CXO', value: 'co-founder-cxo', iconVariant: 'user-square' },
  { text: 'Engineering', value: 'engineering', iconVariant: 'cube-01' },
  { text: 'Operations', value: 'operations', iconVariant: 'dots-grid' },
  { text: 'Product Management', value: 'product-manager', iconVariant: 'heart-hand' },
  { text: 'Other', value: 'other', iconVariant: 'pencil-line' }
]

export const blockchainOptions = [
  { text: 'Ethereum', value: 'ethereum', iconVariant: 'ethereum', iconVariantDark: 'ethereum-dark' },
  { text: 'Arbitrum', value: 'arbitrum', iconVariant: 'arbitrum', iconVariantDark: 'arbitrum-dark' },
  { text: 'BNB Chain', value: 'bnbchain', iconVariant: 'bnbchain', iconVariantDark: 'bnbchain-dark' },
  { text: 'Avalanche', value: 'avalanche', iconVariant: 'avalanche', iconVariantDark: 'avalanche-dark' },
  { text: 'Polygon', value: 'polygon', iconVariant: 'polygon', iconVariantDark: 'polygon-dark' },
  { text: 'Other', value: 'other', iconVariant: 'pencil-line' }
]

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  company: '',
  website: '',
  purpose: purposeOptions[0],
  contactMethod: contactMethodOptions[0],
  role: roleOptions[0],
  blockchain: blockchainOptions[0],
  phone: '',
  message: ''
}
export const ContactForm = () => {
  const [formData, setFormData] = useState(initialState)

  const [error, setError] = useState()

  const [captchaCode, setCaptchaCode] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [submitClicked, setSubmitClicked] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const [resetBlockchains, setResetBlockchains] = useState(0)

  const recaptchaRef = useRef()
  const itemsRef = useRef([])

  const makeRequest = async (data) => {
    const API_URL = `${publicEnv.formsApiServer}/contact`

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!res.ok) {
        const data = await res.json()
        window.alert(data.data)
      }
    } catch (err) {
      throw error
    }
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    setSubmitClicked(true)

    const { validated, firstErrorKey } = validateForm(formData, setError)

    if (!validated && firstErrorKey) {
      itemsRef.current?.[firstErrorKey]?.focus()
    }

    if (!captchaCode) {
      window.alert('Invalid Captcha')
      return
    }

    if (validated && acceptTerms) {
      const _data = JSON.parse(JSON.stringify(formData))

      _data.captcha = captchaCode
      _data.contactMethod = formData.contactMethod.text
      _data.purpose = formData.purpose.text
      _data.role = formData.role.text
      _data.blockchains = _data.blockchain
      _data.company_name = undefined
      _data.blockchain = undefined
      _data.phone = undefined

      try {
        await makeRequest(_data)

        setSubmitSuccess(true)
        setFormData(initialState)
        setSubmitClicked(false)
        setResetBlockchains(val => val + 1)
      } catch (error) {
        console.log('error')
        console.error(error)
      }
    }
  }

  const onReCAPTCHAChange = (captchaCode) => {
    if (!captchaCode) {
      return
    }
    setCaptchaCode(captchaCode)
  }

  const handleChange = () => {
    setAcceptTerms((prev) => !prev)
  }

  const handleNameChange = (field, value) => {
    if (value === '') {
      return setFormData((prev) => ({ ...prev, [field]: value }))
    }
    if (/^[a-zA-Z]+$/.test(value)) {
      setFormData((prev) => ({ ...prev, [field]: value }))
    }
  }

  const handlePhoneChange = (field, value) => {
    if (value === '') {
      return setFormData((prev) => ({ ...prev, [field]: value }))
    }
    if (/^\+?\d*$/.test(value)) {
      setFormData((prev) => ({ ...prev, [field]: value }))
    }
  }

  const handleBlockchainChange = _options => {
    setFormData(prev => ({
      ...prev,
      blockchain: _options.map(_option => {
        const _val = _option.textValue ?? _option.text
        if (_val) return _val
        return false
      }).filter(val => !!val)
    }))
  }

  useEffect(() => {
    if (submitClicked) validateForm(formData, setError)
  }, [formData, submitClicked])

  return (
    <Form onSubmit={onSubmit}>
      <FirstRow>
        <WrappedInput>
          <InputWithLabel
            required
            label='First Name*'
            placeholder='John'
            value={formData.firstname}
            onChange={(e) => handleNameChange('firstname', e.target.value)}
            error={error?.firstname}
            ref={el => {
              itemsRef.current.firstname = el
            }}
            id='firstname'
          />
        </WrappedInput>

        <WrappedInput>
          <InputWithLabel
            required
            label='Last Name*'
            placeholder='Doe'
            value={formData.lastname}
            onChange={(e) => handleNameChange('lastname', e.target.value)}
            error={error?.lastname}
            ref={el => {
              itemsRef.current.lastname = el
            }}
            id='lastname'
          />
        </WrappedInput>
      </FirstRow>

      <InputWithLabel
        required
        label='Email*'
        placeholder='john@example.com'
        type='email'
        value={formData.email}
        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
        error={error?.email}
        ref={el => {
          itemsRef.current.email = el
        }}
        id='email'
      />

      <InputWithLabel
        required
        label='What is the name of your business or project?*'
        placeholder='Example Inc.'
        value={formData.company}
        onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
        error={error?.company}
        ref={el => {
          itemsRef.current.company = el
        }}
        id='company'
      />

      <FilterContainer>
        <FormSelector
          options={blockchainOptions}
          label='What blockchains are you currently building on?*'
          error={error?.blockchain}
          placeholder='Choose relevant blockchains from the list'
          onChange={handleBlockchainChange}
          ref={el => {
            itemsRef.current.blockchain = el
          }}
          id='blockchain'
          reset={resetBlockchains}
        />
      </FilterContainer>

      <InputWithLabel
        required
        label='What is the website of your business or project?*'
        placeholder='https://example.com'
        type='url'
        value={formData.website}
        onChange={(e) => setFormData((prev) => ({ ...prev, website: e.target.value }))}
        error={error?.website}
        ref={el => {
          itemsRef.current.website = el
        }}
        id='website'
      />

      <FilterContainer>
        <FormOptions
          options={purposeOptions}
          selectedOption={formData.purpose}
          setSelectedOption={(_s) => setFormData((prev) => ({ ...prev, purpose: _s }))}
          defaultOption={purposeOptions[0]}
          label='Please select a purpose of this contact request*'
          error={error?.purpose}
          ref={el => {
            itemsRef.current.purpose = el
          }}
          id='purpose'
        />
      </FilterContainer>

      <FilterContainer>
        <FormOptions
          options={contactMethodOptions}
          selectedOption={formData.contactMethod}
          setSelectedOption={(_s) => setFormData((prev) => ({ ...prev, contactMethod: _s }))}
          defaultOption={contactMethodOptions[0]}
          filterlabelposition='top'
          label='What’s the best way to get in touch with you?*'
          error={error?.contactMethod}
          ref={el => {
            itemsRef.current.contactMethod = el
          }}
          id='contactMethod'
        />

        {
          ['telegram', 'phone'].includes(formData.contactMethod.value) && (
            <SubInputs>
              <InputWithLabel
                required
                placeholder='Enter your Whatsapp/Telegram Id'
                value={formData.phone}
                onChange={(e) => handlePhoneChange('phone', e.target.value)}
                error={error?.phone}
                ref={el => {
                  itemsRef.current.phone = el
                }}
                id='phone'
              />
            </SubInputs>
          )

        }
      </FilterContainer>

      <FilterContainer>
        <FormOptions
          options={roleOptions}
          selectedOption={formData.role}
          setSelectedOption={(_s) => setFormData((prev) => ({ ...prev, role: _s }))}
          defaultOption={roleOptions[0]}
          filterlabelposition='top'
          label='What role best describes you?*'
          error={error?.role}
          ref={el => {
            itemsRef.current.role = el
          }}
          id='role'
        />
      </FilterContainer>

      <TextArea
        required
        label='Message*'
        placeholder='Kindly write your message'
        value={formData.message}
        onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
        error={error?.message}
        rows={13}
        ref={el => {
          itemsRef.current.message = el
        }}
        id='message'
      />

      <Checkbox
        checked={acceptTerms}
        onChange={handleChange}
      >
        I accept the Neptune Mutual <Link href='/policies/privacy-policy'>privacy policy</Link>
      </Checkbox>

      <ReCAPTCHA
        ref={recaptchaRef}
        size='normal'
        sitekey={publicEnv.recaptchaSiteKey}
        onChange={onReCAPTCHAChange}
      />

      <StyledButton
        hierarchy='primary'
        size='xl'
        // disabled={error || !captchaCode || !acceptTerms}
      >
        <span>Send Message</span>
        <Icon variant='send-03' size={24} />
      </StyledButton>

      {
          submitSuccess && (
            <SuccessMessage>
              <Icon variant='check-circle-broken' size={20} />
              Thank you for contacting us. We have received your message.
            </SuccessMessage>
          )
       }
    </Form>
  )
}

const Form = styled.form`
  max-width: 680px;
  width:100%;
  display:flex;
  gap:24px;
  flex-direction: column;
  margin: 56px auto 96px;

  @media (max-width: 768px){
    padding: 0 16px;
    margin: 40px auto 64px;
  }
`
const FirstRow = styled.div`
  display:flex;
  gap: 32px;
  width: 100%;
  @media (max-width: 768px){
    gap: 24px;
    flex-wrap:wrap;
  }
`

const WrappedInput = styled.div`
  width: 100%;
`

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 8px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
  
  :disabled {
    opacity: 0.75;
  }
  
  @media (max-width: 768px){
    margin-top: 16px;
  }
`

const FilterContainer = styled.div`
  width:100%;
`

const SubInputs = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  ${typography.styles.textMd}
  ${typography.weights.regular}
  color: ${colors.success[600]};
  gap: 12px;
`
