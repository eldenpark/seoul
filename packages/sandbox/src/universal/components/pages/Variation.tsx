import React from 'react';
import styled from 'styled-components';

const StyledVariation = styled.div({
  marginBottom: 36,
});

const VariationTitle = styled.p({
  fontSize: '1.7rem',
  marginBottom: 18,
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
