import React from 'react';

import {
  ComponentTypeContext,
} from '@@universal/context';

export default function useComponentType<P>(components) {
  const componentType = React.useContext(ComponentTypeContext);
  const Component: React.FC<P> = components[componentType];
  if (Component === undefined) {
    throw new Error('useComponentType(): no component is matched with given type');
  }
  return Component;
}
