"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const react_1 = __importDefault(require("react"));
const h3 = styled_1.default.h2 `
  font-size: 3.8rem;
  font-weight: 300;
  letter-spacing: -0.00833em;
  line-height: 1;
`;
const h4 = styled_1.default.p `
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.04;
`;
const h5 = styled_1.default.p `
  font-size: 2.025rem;
  font-weight: 300;
  letterspacing: 0.00625;
  line-height: 1.17;
`;
const h6 = styled_1.default.p `
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 0.02938em;
`;
const h7 = styled_1.default.p `
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.00938em;
`;
const h8 = styled_1.default.p `
  font-size: 1.0rem;
  font-weight: 400;
  letter-spacing: 0.00438em;
`;
const t6 = styled_1.default.span `
  font-size: 1.3rem;
  line-height: 1.5;
`;
const t7 = styled_1.default.span `
  font-size: 1.15rem;
  font-weight: 400;
  letter-spacing: 0.00938em;
  line-height: 1.5;
`;
const t8 = styled_1.default.span `
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.01020em;
  line-height: 1.4;
`;
const t9 = styled_1.default.span `
  font-size: 0.87rem;
  font-weight: 400;
  letter-spacing: 0.01103em;
  line-height: 1.3;
`;
const componentMapping = {
    h3,
    h4,
    h5,
    h6,
    h7,
    h8,
    t6,
    t7,
    t8,
    t9,
};
const Text = ({ children, className, textType = 't8', }) => {
    const Component = componentMapping[textType];
    if (Component === undefined) {
        throw new Error(`textType (${textType}) is not valid for <Text />`);
    }
    return (react_1.default.createElement(Component, { className: className }, children));
};
exports.default = Text;
