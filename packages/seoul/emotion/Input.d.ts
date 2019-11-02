import React from 'react';
declare const Input: React.FC<InputProps>;
export default Input;
export interface InputProps {
    fullWidth?: boolean;
    id?: string;
    label: string;
    onBlur?: any;
    onFocus?: any;
    placeholder?: string;
    type?: string;
    [prop: string]: any;
}
