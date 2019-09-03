import React from 'react';

const h3 = styled.h2`
  font-size: 3.8rem;
  font-weight: 300;
  letter-spacing: -0.00833em;
  line-height: 1;
`;

const h4 = styled.p`
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.04;
`;

const h5 = styled.p`
  font-size: 2.025rem;
  font-weight: 300;
  letterspacing: 0.00625;
  line-height: 1.17;
`;

const h6 = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 0.02938em;
`;

const h7 = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.00938em;
`;

const h8 = styled.p`
  font-size: 1.0rem;
  font-weight: 400;
  letter-spacing: 0.00438em;
`;

const t6 = styled.span`
  font-size: 1.3rem;
  line-height: 1.5;
`;

const t7 = styled.span`
  font-size: 1.15rem;
  font-weight: 400;
  letter-spacing: 0.00938em;
  line-height: 1.5;
`;

const t8 = styled.span`
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.01020em;
  line-height: 1.4;
`;

const t9 = styled.span`
  font-size: 0.87rem;
  font-weight: 400;
  letter-spacing: 0.01103em;
  line-height: 1.3;
`;

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

export interface TextProps {
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
