import 'seoul/linaria/Table.css';

import LnTable, { TableProps } from 'seoul/linaria/Table';
import React from 'react';
import ScTable from 'seoul/styled/Table';

import { ComponentType } from '@@universal/constants';
import PageBase from '@@universal/components/pages/PageBase';
import Variation from '@@universal/components/pages/Variation';
import useComponentType from '@@universal/hooks/useComponentType';

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
  const { Component } = useComponentType<TableProps>({
    [ComponentType.LINARIA]: LnTable,
    [ComponentType.STYLED]: ScTable,
  });

  return (
    <PageBase pageTitle="Table">
      <Variation typeLabel="default">
        <Component
          bodyRows={bodyRows}
          headerRows={headerRows}
        />
      </Variation>
    </PageBase>
  );
};

export default TablePage;
