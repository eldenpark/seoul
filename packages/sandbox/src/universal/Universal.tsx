import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import BadgedPage from '@@universal/components/pages/BadgedPage';
import ButtonPage from '@@universal/components/pages/ButtonPage';
import GlobalStyle from '@@universal/GlobalStyle';
import GridPage from '@@universal/components/pages/GridPage';
import ImagePage from '@@universal/components/pages/ImagePage';
import Leftbar from '@@universal/components/Leftbar';
import RootPage from '@@universal/components/pages/RootPage';
import TablePage from '@@universal/components/pages/TablePage';
import TextPage from '@@universal/components/pages/TextPage';
import SpinnerPage from '@@universal/components/pages/SpinnerPage';

const componentDefinitions = [
  {
    component: BadgedPage,
    name: 'badged',
  },
  {
    component: ButtonPage,
    name: 'button',
  },
  {
    component: GridPage,
    name: 'grid',
  },
  {
    component: TextPage,
    name: 'text',
  },
  {
    component: ImagePage,
    name: 'image',
  },
  {
    component: TablePage,
    name: 'table',
  },
  {
    component: SpinnerPage,
    name: 'spinner',
  },
];

const StyledUniversal = styled.div({
  display: 'flex',
  fontFamily: '"Roboto", sans-serif',
});

const Page = styled.div({
  display: 'flex',
  flexGrow: 1,
  padding: '38px 40px',
});

const Universal: React.FC<{}> = () => {
  const routes = React.useMemo(() => {
    const routeComponents = componentDefinitions.map(({
      component,
      name,
    }) => {
      return (
        <Route
          component={component}
          key={name}
          path={`/styled/${name}`}
        />
      );
    });

    routeComponents.push(
      <Route
        component={RootPage}
        key="root"
      />,
    );

    return routeComponents;
  }, []);

  return (
    <StyledUniversal>
      <GlobalStyle />
      <Leftbar />
      <Page>
        <Switch>
          {routes}
        </Switch>
      </Page>
    </StyledUniversal>
  );
};

export default Universal;
