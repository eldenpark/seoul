const Image = styled.div<ImgaeProps>`
  background-image: ${(props) => `url('${props.imgUrl}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  flex-shrink: 0;
  height: ${(props) => props.size || 80};
  width: ${(props) => props.size || 80};
`;

export default Image;

interface ImgaeProps {
  imgUrl: string;
  size?: number;
}
