import React from 'react';
import styled, {
  CSSProperties,
} from 'styled-components';

const TextStyle: TextStyle = {
  h3: {
    fontSize: '1.6rem',
    fontWeight: 500,
    letterSpacing: '0.02938em',
    lineHeight: 1.5,
  },
  h4: {
    fontSize: '1.3rem',
    fontWeight: 500,
    letterSpacing: '0.00938em',
    lineHeight: 1.5,
  },
  h5: {
    fontSize: '1.0rem',
    fontWeight: 500,
    letterSpacing: '0.00438em',
  },
  t3: {
    fontSize: '1.3rem',
  },
  t4: {
    fontSize: '1.15rem',
    letterSpacing: '0.00938em',
    lineHeight: 1.5,
  },
  t5: {
    fontSize: '1rem',
  },
};

const styledFunction = (props) => {
  const textStyle = TextStyle[props.textType];
  return {
    ...textStyle,
  };
};

const Span = styled.span(styledFunction);

const P = styled.p(styledFunction);

const Text: React.FC<TextProps> = ({
  children,
  className,
  p = false,
  textType = 't5',
}) => {
  const Component: any = p ? P : Span;
  return (
    <Component
      className={className}
      textType={textType}
    >
      {children}
    </Component>
  );
};

export default Text;

interface TextProps {
  className?: string;
  p?: boolean;
  textType?: TextType;
}

type TextStyle = {
  [type in TextType]: CSSProperties;
};

type TextType = 'h3'
| 'h4'
| 'h5'
| 't3'
| 't4'
| 't5';
