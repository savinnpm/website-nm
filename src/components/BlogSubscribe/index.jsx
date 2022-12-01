import Link from 'next/link'
import styled from 'styled-components'
import { Button } from '../Button'
import { Input } from '../Input'
import { InputHint } from '../Input/Hint'

export const BlogSubscribe = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get('email')
    alert(email)
  }

  return (
    <Container onSubmit={handleSubmit}>
      <InputContainer>
        <Input placeholder='Enter your email' type='email' name='email'>
          <InputHint>We care about your data in our <Link href='#'>privacy policy</Link>.</InputHint>
        </Input>
      </InputContainer>

      <Button
        hierarchy='primary'
        size='xl'
      >
        Subscribe
      </Button>
    </Container>
  )
}

const Container = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`

const InputContainer = styled.div`
  flex:1;
  max-width: 360px;
`
