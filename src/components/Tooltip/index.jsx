import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import styled from 'styled-components';
import { typography } from '../../../styles/typography';

const StyledContent = styled(TooltipPrimitive.Content)`
  background-color: black;
  border-radius: 4px;
  padding: 5px 10px;

  max-width: ${props => props.multiline ? '250px':'none'};
  padding-bottom: ${props => props.multiline ? '7px':'5px'};
`


export const Tooltip = ({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  delayDuration,
  disableHoverableContent,
  multiline,
  ...props
}) => {
  const rootProps = { open, defaultOpen, onOpenChange, delayDuration, disableHoverableContent };
  return (
    <TooltipPrimitive.Root {...rootProps}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <StyledContent side="top" align="center" sideOffset={5} {...props} multiline={multiline}>
          <Text
          multiline={multiline}
            size="1"
            css={{
              color: '$loContrast',
              lineHeight: multiline ? '20px' : undefined,
            }}
          >
            {content}
          </Text>
          <div>
            <TooltipPrimitive.Arrow width={11} height={5} style={{ fill: 'black' }} />
          </div>
        </StyledContent>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}

const Text = styled.p`
  line-height: ${props => props.multiline ? '20px' : undefined};
  color: white;

  ${typography.styles.textXs};
`