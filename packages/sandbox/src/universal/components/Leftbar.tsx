import { logger } from 'jege';
import React from 'react';
import styled from 'styled-components';

import componentDefinitions from '@@universal/componentDefinitions';
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

  const Li = React.useMemo(() => {
    const LiComponent: React.FC<LiComponentProps> = ({
      label,
    }) => (
      <li
        data-href={`/styled/${label.toLowerCase()}`}
        onClick={handleClickButton}
      >
        {label}
      </li>
    );
    return LiComponent;
  }, ['hot']);

  const menus = React.useMemo(() => {
    return componentDefinitions.map(({ components, label }) => {
      const lists = components.map(({ name }) => {
        return (
          <Li
            key={name}
            label={name.charAt(0).toUpperCase() + name.slice(1)}
          />
        );
      });

      return (
        <div key={label}>
          <p>{label}</p>
          <ul>{lists}</ul>
        </div>
      );
    });
  }, [componentDefinitions]);

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
          {menus}
        </div>
      </FixedMenubar>
    </StyledLeftbar>
  );
};

export default Leftbar;

interface LiComponentProps {
  label: string;
}
