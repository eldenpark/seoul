import styled from 'styled-components';

const Image = styled.div<ImgaeProps>(({
  imgUrl,
  size,
}) => ({
  backgroundImage: `url('${imgUrl}')`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  height: size || 80,
  width: size || 80,
}));

export default Image;

interface ImgaeProps {
  imgUrl: string;
  size?: number;
}
