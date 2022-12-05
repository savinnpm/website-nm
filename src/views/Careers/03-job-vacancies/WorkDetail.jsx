import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { Icon } from '../../../components/Icon'

export const WorkDetail = ({ variant, children }) => {
  return (
    <Container>
      <Icon variant={variant} size={20} />

      {children}
    </Container>
  )
}

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme.isLightMode ? colors.gray['600'] : colors.gray['600']};

  ${typography.styles.textMd};
  ${typography.weights.medium};
  
  svg  {
    color: ${(props) => props.theme.isLightMode ? colors.gray['400'] : colors.gray['400']};
  }
`
