import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { ComponentDefinition } from '@@universal/components/componentDefinitions';
import RootPage from '@@universal/components/pages/componentPages/RootPage';

const StyledPage = styled.div({
  display: 'flex',
  flexGrow: 1,
  padding: '38px 40px',
});

const Page: React.FC<PageProps> = ({
  componentDefinitions,
}) => {
  const routes = React.useMemo(() => {
    const routeComponents = componentDefinitions.flatMap(({ components, label }) => {
      return components.map((component) => {
        return (
          <Route
            component={component.component}
            key={component.name}
            path={`/${label.toLowerCase()}/${component.name}`}
          />
        );
      });
    });

    routeComponents.push(
      <Route
        component={RootPage}
        key="root"
      />,
    );

    return routeComponents;
  }, ['hot']);

  return (
    <StyledPage>
      <Switch>
        {routes}
      </Switch>
    </StyledPage>
  );
};

export default Page;

interface PageProps {
  componentDefinitions: ComponentDefinition[];
}
