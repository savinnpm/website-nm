import { createGlobalStyle } from 'styled-components'
import { colors, primaryColorKey } from '../styles/colors'

const GlobalStyle = createGlobalStyle`
    a {
        color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['600'] : colors[primaryColorKey]['500']};

        :hover, :active{
            color: ${colors.rose[600]};
            text-decoration:none;
        }
    }
`
export default GlobalStyle
