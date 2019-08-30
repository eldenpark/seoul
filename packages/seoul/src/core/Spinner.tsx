import React from 'react';

const SpinnerContent = styled.div`
  &, &::after, &::before {
    animation: load1 1s infinite ease-in-out;
    background: #f5f5f5;
    height: 3em;
    width: 0.8em;
  }
  &::after {
    left: 1.5em;
  }
  &::after, &::before {
    content: '';
    position: absolute;
    top: 0;
  }
  &::before {
    animation-delay: -0.32s;
    left: -1.5em;
  }
  animation-delay: -0.16s;
  color: #f5f5f5;
  font-size: 11px;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  @keyframes load1 {
    0%, 80%, 100% {
      box-shadow: 0 0;
      height: 3em;
    }
    40%: {
      box-shadow: 0 -2em;
      height: 4em;
    }
  }
`;

const StyledSpinner = styled.div<any>`
  align-items: center;
  display: flex;
  height: ${(props) => (props.height ? props.height : '100%')};
  justify-content: center;
  min-height: 90;
  width: 100%;
`;

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
