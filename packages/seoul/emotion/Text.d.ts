import React from 'react';
declare const Text: React.FC<TextProps>;
export default Text;
export interface TextProps {
    className?: string;
    textType?: TextType;
}
declare type TextType = 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 't6' | 't7' | 't8' | 't9';
