import styled from 'styled-components';

const Grid = styled.div<GridProps>((props) => {
  const widthRatio = props.unit ? `${props.unit / 12.0 * 100}%` : undefined;
  return {
    flexBasis: widthRatio,
    flexGrow: 0,
    maxWidth: widthRatio,
  };
});

export default Grid;

interface GridProps {
  unit: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}
