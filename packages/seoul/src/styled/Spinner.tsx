import React from 'react';
import styled from 'styled-components';

const SpinnerContent = styled.div({
  '&': {
    '-ms-transform': 'translateZ(0)',
    '-webkit-animation-delay': '-0.16s',
    '-webkit-transform': 'translateZ(0)',
    'animation-delay': '-0.16s',
    color: '#f5f5f5',
    'font-size': '11px',
    position: 'relative',
    'text-indent': '-9999em',
    transform: 'translateZ(0)',
  },
  '&, &::after, &::before': {
    '-webkit-animation': 'load1 1s infinite ease-in-out',
    animation: 'load1 1s infinite ease-in-out',
    background: '#f5f5f5',
    height: '3em',
    width: '0.8em',
  },
  '&::after': {
    left: '1.5em',
  },
  '&::after, &::before': {
    content: '\'a\'',
    position: 'absolute',
    top: 0,
  },
  '&::before': {
    '-webkit-animation-delay': '-0.32s',
    'animation-delay': '-0.32s',
    left: '-1.5em',
  },
  '@-webkit-keyframes load1': {
    '0%, 80%, 100%': {
      'box-shadow': '0 0',
      height: '3em',
    },
    '40%': {
      'box-shadow': '0 -2em',
      height: '4em',
    },
  },
  '@keyframes load1': {
    '0%, 80%, 100%': {
      'box-shadow': '0 0',
      height: '3em',
    },
    '40%': {
      'box-shadow': '0 -2em',
      height: '4em',
    },
  },
});

const StyledSpinner = styled.div<any>((props) => ({
  alignItems: 'center',
  display: 'flex',
  height: props.height ? props.height : '100%',
  justifyContent: 'center',
  minHeight: 90,
  width: '100%',
}));

const Spinner: React.FC<SpinnerProps> = ({
  height,
}) => {
  return (
    <StyledSpinner height={height}>
      <SpinnerContent />
    </StyledSpinner>
  );
};

export default Spinner;

interface SpinnerProps {
  height?: number;
}
