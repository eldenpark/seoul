/// <reference types="react" />
declare const Image: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ImageProps, object>;
export default Image;
export interface ImageProps {
    imgUrl: string;
    size?: number;
}
