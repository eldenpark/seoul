import { logger } from 'jege';
import React from 'react';
import styled from 'styled-components';

import useRouter from '@@universal/hooks/useRouter';

const log = logger('[sandbox]');

const StyledLeftbar = styled.div({
  flexShrink: 0,
  width: 230,
});

const Logo = styled.div({
});

const FixedMenubar = styled.div({
  borderRight: '1px solid #d0d0d0',
  height: '100%',
  position: 'fixed',
  width: 230,
});

const Leftbar: React.FC<{}> = () => {
  const { history } = useRouter();

  const handleClickButton = React.useCallback((e) => {
    const href = e.target.getAttribute('data-href');
    log('handleClickButton(): dataHref: %s', href);
    history.push(href);
  }, []);

  return (
    <StyledLeftbar>
      <FixedMenubar>
        <Logo
          data-href="/"
          onClick={handleClickButton}
        >
          Seoul.js
        </Logo>
        <div>
          <p>span</p>
          <ul>
            <li
              data-href="/styled/text"
              onClick={handleClickButton}
            >
              Text
            </li>
          </ul>
        </div>
      </FixedMenubar>
    </StyledLeftbar>
  );
};

export default Leftbar;
