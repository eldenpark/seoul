import React from 'react';
import Table from 'seoul/styled/Table';

import PageBase from '@@universal/components/pages/PageBase';
import Variation from '@@universal/components/pages/Variation';

const headerRows = [
  {
    cells: [
      {
        label: 'Username',
      },
      {
        label: 'Email',
      },
      {
        label: 'Registered at',
        textAlign: 'right',
      },
    ],
    rowId: 'headerRow',
  },
];

const bodyRows = [
  {
    cells: [
      {
        label: 'Jane',
      },
      {
        label: 'jane@example.com',
      },
      {
        label: '2019.08.12',
        textAlign: 'right',
      },
    ],
    rowId: 'first',
  },
];

const TablePage: React.FC<{}> = () => {
  return (
    <PageBase pageTitle="Table">
      <Variation typeLabel="default">
        <Table
          bodyRows={bodyRows}
          headerRows={headerRows}
        />
      </Variation>
    </PageBase>
  );
};

export default TablePage;
