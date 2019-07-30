import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@@universal/components/Header';
import PageDefault from '@@universal/components/PageDefault';
import PageOne from '@@universal/components/PageOne';

const Page = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

const Universal: React.FC<{}> = () => {
  return (
    <div>
      <Header />
      <Page className="page">
        <Switch>
          <Route
            component={PageOne}
            path="/pageOne"
          />
          <Route
            component={PageDefault}
          />
        </Switch>
      </Page>
    </div>
  );
};

export default Universal;
