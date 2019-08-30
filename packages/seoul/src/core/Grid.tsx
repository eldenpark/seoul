import React from 'react';

const StyledGrid = styled.div`
  flex-grow: 0;
`;

const Grid: React.FC<GridProps> = ({
  children,
  unit,
}) => {
  const widthRatio = unit ? `${unit / 12.0 * 100}%` : undefined;
  return (
    <StyledGrid
      style={{
        flexBasis: widthRatio || 'auto',
        maxWidth: widthRatio || 'none',
      }}
    >
      {children}
    </StyledGrid>
  );
};

export default Grid;

interface GridProps {
  unit: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}
