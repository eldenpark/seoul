import React from 'react';
declare const Table: React.FC<TableProps>;
export default Table;
export interface TableProps {
    bodyRows: Row[];
    headerRows: Row[];
}
interface Row {
    cells: Cell[];
    rowId: any;
}
interface Cell {
    label: string | number | React.ElementType<any> | JSX.Element;
    textAlign?: string;
}
