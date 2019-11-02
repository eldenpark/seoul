"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const react_1 = __importDefault(require("react"));
const StyledTable = styled_1.default.div `
  overflow-x: scroll;
  width: 100%;
`;
const TableContent = styled_1.default.table `
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
const TableCell = styled_1.default.td `
  border-bottom: 1px solid #e0e0e0;
  padding: 14px 16px;
`;
const Rows = ({ componentType = 'tbody', rows, }) => {
    const Component = componentType;
    return (react_1.default.createElement(Component, null, rows.map((row) => {
        const { cells, rowId } = row;
        const cellElements = cells && cells.map((cell, cellIdx) => {
            const { label } = cell, restCellProps = __rest(cell, ["label"]);
            const isReactElement = react_1.default.isValidElement(label);
            const textCellProps = isReactElement ? {} : restCellProps;
            return (react_1.default.createElement(TableCell, { key: (cell.label && cell.label.toString()) || cellIdx, textCellProps: textCellProps }, label));
        });
        return (react_1.default.createElement("tr", { key: rowId }, cellElements));
    })));
};
const Table = ({ bodyRows, headerRows, }) => {
    return (react_1.default.createElement(StyledTable, null,
        react_1.default.createElement(TableContent, null,
            react_1.default.createElement(Rows, { componentType: "thead", rows: headerRows }),
            react_1.default.createElement(Rows, { componentType: "tbody", rows: bodyRows }))));
};
exports.default = Table;
