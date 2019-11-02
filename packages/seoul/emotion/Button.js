"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const Button = styled_1.default.button `
  &:hover {
    color: ${(props) => (props.disabled ? 'inherit' : '#d6d6d6')};
  }
  border: none;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  display: inline-block;
  font-weight: 500;
  letter-spacing: 0.02857em;
  outline: none;
  padding: 12px 0;
  transition: all 0.3s;
`;
exports.default = Button;
