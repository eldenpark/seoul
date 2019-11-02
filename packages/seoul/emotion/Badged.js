"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const react_1 = __importDefault(require("react"));
const StyledBadged = styled_1.default.div `
  display: inline-block;
  position: relative;
`;
const StyledBadge = styled_1.default.span `
  &.badge-invisible {
    transform: scale(0) translate(50%, -50%);
    transform-origin: 100% 0%;
    transition: transform 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  align-content: center;
  align-items: center;
  background-color: #1976d2;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  cursor: default;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0.75rem;
  font-weight: 500;
  height: 20px;
  justify-content: center;
  min-width: 20px;
  padding: 0 4px;
  position: absolute;
  right: 0;
  top: 0;
  transform: scale(1) translate(50%, -50%);
  transform-origin: 100% 0%;
  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: 1;
`;
const Badge = ({ badgeStyle, label, }) => {
    return (react_1.default.createElement(StyledBadge, { className: (label === undefined ? 'badge-invisible' : ''), style: badgeStyle }, label));
};
const Badged = ({ badgeStyle, children, label, }) => {
    return (react_1.default.createElement(StyledBadged, null,
        children,
        react_1.default.createElement(Badge, { badgeStyle: badgeStyle, label: label })));
};
exports.default = Badged;
