import React from 'react';
declare const Badged: React.FC<BadgedProps>;
export default Badged;
export interface BadgedProps {
    badgeStyle?: Object;
    label: string | number | undefined;
}
