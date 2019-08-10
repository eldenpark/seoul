import React from 'react';
import styled from 'styled-components';

const StyledVariation = styled.div({
  marginBottom: 20,
});

const VariationTitle = styled.p({
  fontSize: '1.7rem',
  lineHeight: 1.8,
});

const Variation = ({
  children,
  typeLabel,
}) => {
  return (
    <StyledVariation>
      <VariationTitle>{typeLabel}</VariationTitle>
      {children}
    </StyledVariation>
  );
};

export default Variation;
