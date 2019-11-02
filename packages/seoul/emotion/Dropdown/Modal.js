"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const Modal = ({ children, }) => {
    const target = usePortal();
    return react_dom_1.default.createPortal(children, target);
};
exports.default = Modal;
function usePortal() {
    const rootElemRef = react_1.default.useRef(document.createElement('div'));
    react_1.default.useEffect(() => {
        const parentElem = document.querySelector('body');
        if (parentElem) {
            parentElem.appendChild(rootElemRef.current);
        }
        return () => {
            rootElemRef.current.remove();
        };
    }, []);
    return rootElemRef.current;
}
