import React from 'react';
import styled from 'styled-components';

import PageTitle from '@@universal/components/pages/PageTitle';
import Top from '@@universal/components/Top';
import useRouter from '@@universal/hooks/useRouter';

const StyledPageBase = styled.div({
  flexGrow: 1,
});

const PageContent = styled.div({
  padding: '38px 40px',
});

const PageBase = ({
  children,
  pageTitle,
}) => {
  const { history, location } = useRouter();
  const handleChangeComponentType = React.useCallback((e) => {
    const { pathname } = location;
    const nextPath = pathname.split('/')
      .map((elem, idx) => {
        if (idx === 1) {
          return e.target.value;
        }
        return elem;
      })
      .join('/');
    history.push(nextPath);
  }, [location]);

  return (
    <StyledPageBase>
      <Top
        handleChangeComponentType={handleChangeComponentType}
      />
      <PageContent>
        <PageTitle>
          {pageTitle}
        </PageTitle>
        <div>
          {children}
        </div>
      </PageContent>
    </StyledPageBase>
  );
};

export default PageBase;
