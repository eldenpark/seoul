const Image = styled.div<ImageProps>`
  background-image: ${(props) => `url('${props.imgUrl}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  flex-shrink: 0;
  height: ${(props) => props.size || '80px'};
  width: ${(props) => props.size || '80px'};
`;

export default Image;

export interface ImageProps {
  imgUrl: string;
  size?: number;
}
