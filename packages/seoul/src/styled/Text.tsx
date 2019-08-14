import React from 'react';
import styled from 'styled-components';

const h3 = styled.h2({
  fontSize: '3.8rem',
  fontWeight: 300,
  letterSpacing: '-0.00833em',
  lineHeight: 1,
});

const h4 = styled.p({
  fontSize: '3rem',
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: 1.04,
});

const h5 = styled.p({
  fontSize: '2.025rem',
  fontWeight: 300,
  letterSpacing: 0.00625,
  lineHeight: 1.17,
});

const h6 = styled.p({
  fontSize: '1.6rem',
  fontWeight: 400,
  letterSpacing: '0.02938em',
});

const h7 = styled.p({
  fontSize: '1.3rem',
  fontWeight: 500,
  letterSpacing: '0.00938em',
});

const h8 = styled.p({
  fontSize: '1.0rem',
  fontWeight: 400,
  letterSpacing: '0.00438em',
});

const t6 = styled.span({
  fontSize: '1.3rem',
  lineHeight: 1.5,
});

const t7 = styled.span({
  fontSize: '1.15rem',
  fontWeight: 400,
  letterSpacing: '0.00938em',
  lineHeight: 1.5,
});

const t8 = styled.span({
  fontSize: '1rem',
  fontWeight: 400,
  letterSpacing: '0.01020em',
  lineHeight: 1.4,
});

const t9 = styled.span({
  fontSize: '0.87rem',
  fontWeight: 400,
  letterSpacing: '0.01103em',
  lineHeight: 1.3,
});

const componentMapping: ComponentMapping = {
  h3,
  h4,
  h5,
  h6,
  h7,
  h8,
  t6,
  t7,
  t8,
  t9,
};

const Text: React.FC<TextProps> = ({
  children,
  className,
  textType = 't8',
}) => {
  const Component = componentMapping[textType];
  if (Component === undefined) {
    throw new Error(`textType (${textType}) is not valid for <Text />`);
  }

  return (
    <Component
      className={className}
    >
      {children}
    </Component>
  );
};

export default Text;

interface TextProps {
  className?: string;
  textType?: TextType;
}

type ComponentMapping = {
  [key in TextType]: React.FC<any>;
};

type TextType =
'h3'
| 'h4'
| 'h5'
| 'h6'
| 'h7'
| 'h8'
| 't6'
| 't7'
| 't8'
| 't9';
