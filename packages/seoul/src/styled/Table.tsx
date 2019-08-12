import React from 'react';
import styled from 'styled-components';

const StyledCommonTable = styled.div({
  overflowX: 'scroll',
  width: '100%',
});

const Table = styled.table({
  '&>thead': {
    color: '#0000008a',
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: '1.3125rem',
  },
  borderSpacing: 0,
  color: '#000000de',
  fontSize: '0.875rem',
  letterSpacing: '0.01071em',
  lineHeight: 1.43,
  width: '100%',
});

const TableCell = styled.td<any>((props) => ({
  borderBottom: '1px solid #e0e0e0',
  padding: '14px 16px',
  ...props.textCellProps,
}));

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

const CommonTable: React.FC<CommonTableProps> = ({
  bodyRows,
  headerRows,
}) => {
  return (
    <StyledCommonTable>
      <Table>
        <Rows
          componentType="thead"
          rows={headerRows}
        />
        <Rows
          componentType="tbody"
          rows={bodyRows}
        />
      </Table>
    </StyledCommonTable>
  );
};

export default CommonTable;

interface CommonTableProps {
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
