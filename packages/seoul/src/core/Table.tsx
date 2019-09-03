import React from 'react';

const StyledTable = styled.div`
  overflow-x: scroll;
  width: 100%;
`;

const TableContent = styled.table`
  &>thead {
    color: #0000008a;
    fontSize: 0.75rem;
    fontWeight: 500;
    lineHeight: 1.3125rem;
  }
  border-spacing: 0;
  color: #000000de;
  fontSize: 0.875rem;
  letterSpacing: 0.01071em;
  lineHeight: 1.43;
  width: 100%;
`;

const TableCell = styled.td<any>`
  border-bottom: 1px solid #e0e0e0;
  padding: 14px 16px;
`;

const Rows: React.FC<RowsProps> = ({
  componentType = 'tbody',
  rows,
}) => {
  const Component = componentType;
  return (
    <Component>
      {rows.map((row) => {
        const { cells, rowId } = row;
        const cellElements = cells && cells.map((cell, cellIdx) => {
          const { label, ...restCellProps } = cell;
          const isReactElement = React.isValidElement(label);
          const textCellProps = isReactElement ? {} : restCellProps;

          return (
            <TableCell
              key={(cell.label && cell.label.toString()) || cellIdx}
              textCellProps={textCellProps}
            >
              {label}
            </TableCell>
          );
        });
        return (
          <tr key={rowId}>
            {cellElements}
          </tr>
        );
      })}
    </Component>
  );
};

const Table: React.FC<TableProps> = ({
  bodyRows,
  headerRows,
}) => {
  return (
    <StyledTable>
      <TableContent>
        <Rows
          componentType="thead"
          rows={headerRows}
        />
        <Rows
          componentType="tbody"
          rows={bodyRows}
        />
      </TableContent>
    </StyledTable>
  );
};

export default Table;

export interface TableProps {
  bodyRows: Row[];
  headerRows: Row[];
}

interface RowsProps {
  componentType: 'thead' | 'tbody';
  rows: Row[];
}

interface Row {
  cells: Cell[];
  rowId: any;
}

interface Cell {
  label: string | number | React.ElementType<any> | JSX.Element;
  textAlign?: string; // 'left' | 'right';
}
