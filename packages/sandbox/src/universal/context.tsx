import React from 'react';

export enum ComponentType {
  LINARIA,
  STYLED,
}

export const ComponentTypeContext = React.createContext(ComponentType.LINARIA);
