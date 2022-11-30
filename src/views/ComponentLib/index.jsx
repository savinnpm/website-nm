import styled from 'styled-components'
import { Button } from '../../components/Button'

export const ComponentLib = () => {
  return (
    <>
      <ButtonsGrid>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='sm' iconLeading iconTrailing iconVariant='arrow-right'>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='md' iconLeading iconTrailing iconVariant='placeholder'>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='lg' iconLeading iconTrailing iconVariant='placeholder'>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='xl' iconLeading iconTrailing iconVariant='placeholder'>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='2xl' iconLeading iconTrailing iconVariant='placeholder'>Test</Button>
        </ButtonsGridItem>

        <ButtonsGridItem>
          <Button hierarchy='primary' size='sm' state='hover' iconLeading iconTrailing iconVariant='placeholder'>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='md' state='hover' iconLeading iconTrailing iconVariant='placeholder'>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='lg' state='hover' iconLeading iconTrailing iconVariant='placeholder'>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='xl' state='hover' iconLeading iconTrailing iconVariant='placeholder'>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='2xl' state='hover' iconLeading iconTrailing iconVariant='placeholder'>Test</Button>
        </ButtonsGridItem>

        <ButtonsGridItem>
          <Button hierarchy='primary' size='sm' state='focussed' iconLeading iconTrailing iconVariant='placeholder'>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='md' state='focussed' iconLeading iconTrailing iconVariant='placeholder'>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='lg' state='focussed' iconLeading iconTrailing iconVariant='placeholder'>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='xl' state='focussed' iconLeading iconTrailing iconVariant='placeholder'>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='2xl' state='focussed' iconLeading iconTrailing iconVariant='placeholder'>Test</Button>
        </ButtonsGridItem>

        <ButtonsGridItem>
          <Button hierarchy='primary' size='sm' state='disabled' iconLeading iconTrailing iconVariant='placeholder'>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='md' state='disabled' iconLeading iconTrailing iconVariant='placeholder'>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='lg' state='disabled' iconLeading iconTrailing iconVariant='placeholder'>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='xl' state='disabled' iconLeading iconTrailing iconVariant='placeholder'>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='2xl' state='disabled' iconLeading iconTrailing iconVariant='placeholder'>Test</Button>
        </ButtonsGridItem>
      </ButtonsGrid>

      <ButtonsGrid>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='sm' destructive>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='md' destructive>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='lg' destructive>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='xl' destructive>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='2xl' destructive>Test</Button>
        </ButtonsGridItem>

        <ButtonsGridItem>
          <Button hierarchy='primary' size='sm' state='hover' destructive>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='md' state='hover' destructive>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='lg' state='hover' destructive>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='xl' state='hover' destructive>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='2xl' state='hover' destructive>Test</Button>
        </ButtonsGridItem>

        <ButtonsGridItem>
          <Button hierarchy='primary' size='sm' state='focussed' destructive>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='md' state='focussed' destructive>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='lg' state='focussed' destructive>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='xl' state='focussed' destructive>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='2xl' state='focussed' destructive>Test</Button>
        </ButtonsGridItem>

        <ButtonsGridItem>
          <Button hierarchy='primary' size='sm' state='disabled' destructive>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='md' state='disabled' destructive>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='lg' state='disabled' destructive>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='xl' state='disabled' destructive>Test</Button>
        </ButtonsGridItem>
        <ButtonsGridItem>
          <Button hierarchy='primary' size='2xl' state='disabled' destructive>Test</Button>
        </ButtonsGridItem>
      </ButtonsGrid>
    </>
  )
}

const ButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 16px;
  margin: 2rem 0;
`

const ButtonsGridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
