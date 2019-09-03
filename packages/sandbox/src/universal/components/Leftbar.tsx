import { logger } from 'jege';
import React from 'react';
import styled from 'styled-components';

import { ComponentDefinition } from '@@universal/components/componentDefinitions';
import useComponentType from '@@universal/hooks/useComponentType';
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

const Leftbar: React.FC<LeftbarProps> = ({
  componentDefinitions,
}) => {
  const { history } = useRouter();
  const { componentType } = useComponentType();
  const handleClickButton = React.useCallback((e) => {
    const href = e.target.getAttribute('data-href');
    log('handleClickButton(): dataHref: %s', href);
    history.push(href);
  }, []);

  const Li = React.useMemo(() => {
    const _componentType = componentType.length > 0 ? `/${componentType}` : '/linaria';
    const LiComponent: React.FC<LiComponentProps> = ({
      label,
    }) => (
      <li
        data-href={`${_componentType}/${label.toLowerCase()}`}
        onClick={handleClickButton}
      >
        {label}
      </li>
    );
    return LiComponent;
  }, [componentType]);

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

interface LeftbarProps {
  componentDefinitions: ComponentDefinition[];
}

interface LiComponentProps {
  label: string;
}
