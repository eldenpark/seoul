import EmImage from 'seoul/emotion/Image';
import React from 'react';
import ScImage, { ImageProps } from 'seoul/styled/Image';

import { ComponentType } from '@@universal/constants';
import PageBase from '@@universal/components/pages/PageBase';
import Variation from '@@universal/components/pages/Variation';
import useComponentType from '@@universal/hooks/useComponentType';

const ImagePage: React.FC<{}> = () => {
  const { Component } = useComponentType<ImageProps>({
    [ComponentType.EMOTION]: EmImage,
    [ComponentType.STYLED]: ScImage,
  });

  return (
    <PageBase pageTitle="Image">
      <Variation typeLabel="default">
        <Component
          imgUrl="https://s-ec.bstatic.com/images/hotel/max1024x768/107/107527439.jpg"
        />
      </Variation>
    </PageBase>
  );
};

export default ImagePage;
