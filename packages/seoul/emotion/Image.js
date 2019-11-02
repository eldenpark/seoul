"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const Image = styled_1.default.div `
  background-image: ${(props) => `url('${props.imgUrl}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  flex-shrink: 0;
  height: ${(props) => props.size || '80px'};
  width: ${(props) => props.size || '80px'};
`;
exports.default = Image;
