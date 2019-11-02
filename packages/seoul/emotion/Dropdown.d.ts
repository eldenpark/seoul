import React from 'react';
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
export interface DropdownProps<D = any, P extends {
    data: D;
} = any> {
    className?: string;
    handleClickRow: any;
    rows: {
        component: React.FC<P>;
        data: {
            idx: string | number;
            [key: string]: any;
        };
    }[];
    selectedIdx: string | number;
}
