import React from 'react';
import { __RouterContext } from 'react-router';

import { ComponentType } from '@@universal/constants';

export default function useComponentType<P>(components?: Components) {
  const { location } = React.useContext(__RouterContext);
  const { pathname } = location;
  const result: UseComponentTypeResult<P> = {
    Component: () => <div>component not found</div>,
    componentType: pathname.split('/')[1],
  };

  if (components !== undefined) {
    const Component: React.FC<P> = components[result.componentType];
    if (Component === undefined) {
      throw new Error('useComponentType(): no component is matched with given type');
    }
    result.Component = Component;
  }

  return result;
}

interface UseComponentTypeResult<P> {
  Component: React.ComponentType<P>;
  componentType: string;
}

type Components = {
  [key in ComponentType]: React.FC<any>;
};
