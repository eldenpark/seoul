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
const StyledInput = styled_1.default.div `
  &.focus>div:after {
    transform: scaleX(1);
  }
  &.focus>div:before {
    border-bottom: '2px solid #000000de',
  }
  &.focus>label {
    color: '#80491f',
  }
  &:not(.focus)>div:hover:before {
    border-bottom: '2px solid #000000de',
  }
  display: inline-block;
  position: relative;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
`;
const Label = styled_1.default.label `
  left: 0;
  position: absolute;
  top: 0;
  transform: scale(0.75);
  transform-origin: top left;
  transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
`;
const Padding = styled_1.default.div `
  &:after {
    border-bottom: 2px solid #80491f;
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  }
  &:before {
    border-bottom: 1px solid #0000006b;
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  margin-top: 14px;
  position: relative;
`;
const InputBody = styled_1.default.input `
  &:focus {
    outline: 0;
  }
  background: none;
  border: none;
  box-sizing: content-box;
  color: currentColor;
  display: block;
  height: 1.1875em;
  margin: 0;
  min-width: 0;
  padding: 6px 0 7px;
  width: 100%;
`;
const Input = (_a) => {
    var { fullWidth, id, label, type = 'text' } = _a, props = __rest(_a, ["fullWidth", "id", "label", "type"]);
    const { onBlur, onFocus } = props, rest = __rest(props, ["onBlur", "onFocus"]);
    const [focusClassName, setFocusClassName] = react_1.default.useState('');
    const handleBlurInput = react_1.default.useCallback((e) => {
        if (onBlur !== undefined) {
            onBlur(e);
        }
        setFocusClassName('');
    }, []);
    const handleFocusInput = react_1.default.useCallback((e) => {
        if (onFocus !== undefined) {
            onFocus(e);
        }
        setFocusClassName('focus');
    }, []);
    return (react_1.default.createElement(StyledInput, { className: focusClassName, fullWidth: fullWidth },
        react_1.default.createElement(Label, Object.assign({}, (id && { htmlFor: id }), { htmlFor: id }), label),
        react_1.default.createElement(Padding, null,
            react_1.default.createElement(InputBody, Object.assign({ onBlur: handleBlurInput, onFocus: handleFocusInput, type: type }, (id && { id }), rest)))));
};
exports.default = Input;
