import styled from 'styled-components'
import { colors, primaryColorKey } from '../../styles/colors'
import { shadows } from '../../styles/shadows'
import { utils } from '../../styles/utils'
import { useThemeContext } from '../theme/ThemeContext'
import { Icon } from './Icon'
import { Tooltip } from './Tooltip'

export const ThemeSelector = () => {
  const { darkMode, setDarkMode } = useThemeContext()

  const handleChange = (e) => {
    setDarkMode(e.target.checked)
  }

  const checked = !!darkMode

  return (
    <Tooltip content='Toggle theme' side='bottom' align='end'>
      <Label>
        <span>Dark Mode</span>
        <Input checked={checked} type='checkbox' onChange={handleChange} />
        <Switch>
          <Icon size={12} variant={checked ? 'sun-filled' : 'moon-star-filled'} />
        </Switch>
      </Label>
    </Tooltip>
  )
}

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  & > span {
    ${utils.srOnly};
  }
`

const Input = styled.input`
  opacity: 0;
  position: absolute;
`

const Switch = styled.div`
  position: relative;
  width: 43px;
  height: 20px;
  background: ${colors.gray['700']};
  border-radius: 32px;
  padding: 2px;
  transition: 300ms all;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    top: 50%;
    left: 2px;
    background: white;
    transform: translate(0, -50%);
    box-shadow: ${shadows.sm};
  }

  ${Input}:checked + & {
    background: ${colors[primaryColorKey]['600']};
    justify-content: flex-start;

    &:before {
      left: calc(100% - 2px);
      transform: translate(-100%, -50%);
    }
  }

  & svg {
    position: relative;
    color: ${colors.white};

    ${Input}:checked + & {
      color: ${colors.white};
    }
  }
`
