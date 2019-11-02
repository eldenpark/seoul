"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const react_1 = __importDefault(require("react"));
const SpinnerContent = styled_1.default.div `
  &, &::after, &::before {
    animation: load1 1s infinite ease-in-out;
    background: #f5f5f5;
    height: 3em;
    width: 0.8em;
  }
  &::after {
    left: 1.5em;
  }
  &::after, &::before {
    content: '';
    position: absolute;
    top: 0;
  }
  &::before {
    animation-delay: -0.32s;
    left: -1.5em;
  }
  animation-delay: -0.16s;
  color: #f5f5f5;
  font-size: 11px;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  @keyframes load1 {
    0%, 80%, 100% {
      box-shadow: 0 0;
      height: 3em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 4em;
    }
  }
`;
const StyledSpinner = styled_1.default.div `
  align-items: center;
  display: flex;
  height: ${(props) => (props.height ? props.height : '100%')};
  justify-content: center;
  min-height: 90px;
  width: 100%;
`;
const Spinner = ({ height, }) => {
    return (react_1.default.createElement(StyledSpinner, { height: height },
        react_1.default.createElement(SpinnerContent, null)));
};
exports.default = Spinner;
