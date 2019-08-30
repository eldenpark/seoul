import React from 'react';
import styled from 'styled-components';

import { ComponentType } from '@@universal/context';

const StyledTop = styled.div({
});

const Top = ({
  handleChangeComponentType,
}) => {
  const MemoizedButton = React.useMemo(() => {
    const Button = ({
      label,
      value,
    }) => (
      <button
        onClick={handleChangeComponentType}
        type="button"
        value={value}
      >
        {label}
      </button>
    );
    return Button;
  }, []);

  return (
    <StyledTop>
      <MemoizedButton
        label="Linaria"
        value={ComponentType.LINARIA}
      />
      <MemoizedButton
        label="Styled"
        value={ComponentType.STYLED}
      />
    </StyledTop>
  );
};

export default Top;
