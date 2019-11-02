"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const react_1 = __importDefault(require("react"));
const StyledGrid = styled_1.default.div `
  flex-grow: 0;
`;
const Grid = ({ children, unit, }) => {
    const widthRatio = unit ? `${unit / 12.0 * 100}%` : undefined;
    return (react_1.default.createElement(StyledGrid, { style: {
            flexBasis: widthRatio || 'auto',
            maxWidth: widthRatio || 'none',
        } }, children));
};
exports.default = Grid;
