"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const react_1 = __importDefault(require("react"));
const Modal_1 = __importDefault(require("./Dropdown/Modal"));
const StyledDropdown = styled_1.default.div `
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const StyledSelected = styled_1.default.div `
  &>*:first-child {
    flex-grow: 1;
  }
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const StyledArrowDownIcon = styled_1.default.svg `
  height: 1em;
  position: absolute;
  right: 0;
  width: 1em;
`;
const ArrowDownIcon = () => {
    return (react_1.default.createElement(StyledArrowDownIcon, { viewBox: "0 0 24 24" },
        react_1.default.createElement("path", { d: "M3 10l5 5 5-5z" })));
};
const Selected = ({ children, innerRef, }) => {
    return (react_1.default.createElement(StyledSelected, { ref: innerRef },
        children,
        react_1.default.createElement(ArrowDownIcon, null)));
};
const Dropdown = ({ className, handleClickRow, rows, selectedIdx, }) => {
    const dropdownRef = react_1.default.useRef();
    const [isOpen, setIsOpen] = useDropdownOpen();
    const handleClick = react_1.default.useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        if (dropdownRef.current && dropdownRef.current.contains(e.target)) {
            setIsOpen(!isOpen.current);
        }
        else if (isOpen.current) {
            setIsOpen(false);
        }
    }, [isOpen]);
    react_1.default.useEffect(() => {
        document.addEventListener('click', handleClick);
        const elem = dropdownRef.current;
        if (elem) {
            const a = elem.getBoundingClientRect();
        }
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    const synthesizedHandleClickRow = react_1.default.useCallback((e, data) => {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(false);
        if (handleClickRow) {
            handleClickRow(e, data);
        }
    }, []);
    const { interpolatedRows, selectedRow, } = useInterpolatedRows({
        rows,
        selectedIdx,
        synthesizedHandleClickRow,
    });
    return (react_1.default.createElement(StyledDropdown, { className: className },
        react_1.default.createElement(Selected, { innerRef: dropdownRef }, selectedRow),
        react_1.default.createElement(Modal_1.default, null, isOpen.current ? interpolatedRows : '')));
};
exports.default = Dropdown;
function useDropdownOpen() {
    const isOpen = react_1.default.useRef(false);
    const [, forceUpdate] = react_1.default.useState();
    const setIsOpen = react_1.default.useCallback((value) => {
        isOpen.current = value;
        forceUpdate({});
    }, []);
    return [isOpen, setIsOpen];
}
function useInterpolatedRows({ rows, selectedIdx, synthesizedHandleClickRow, }) {
    return react_1.default.useMemo(() => {
        let selectedRow;
        const interpolatedRows = rows.map(({ component, data, }) => {
            const isSelectedElement = selectedIdx === data.idx;
            const element = component(Object.assign({ data, key: data.idx }, (!isSelectedElement && { onClick: (e) => synthesizedHandleClickRow(e, data) })));
            if (isSelectedElement) {
                selectedRow = element;
            }
            return element;
        });
        return {
            interpolatedRows,
            selectedRow,
        };
    }, [rows, selectedIdx]);
}
