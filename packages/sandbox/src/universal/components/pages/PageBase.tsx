import React from 'react';
import styled from 'styled-components';

import PageTitle from '@@universal/components/pages/PageTitle';

const StyledPageBase = styled.div({
  flexGrow: 1,
});

const PageBase = ({
  children,
  pageTitle,
}) => {
  return (
    <StyledPageBase>
      <PageTitle>
        {pageTitle}
      </PageTitle>
      <div>
        {children}
      </div>
    </StyledPageBase>
  );
};

export default PageBase;
