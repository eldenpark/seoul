import Image from 'seoul/styled/Image';
import React from 'react';

import PageBase from '@@universal/components/pages/PageBase';
import Variation from '@@universal/components/pages/Variation';

const ImagePage: React.FC<{}> = () => {
  return (
    <PageBase pageTitle="Image">
      <Variation typeLabel="default">
        <Image
          imgUrl="https://s-ec.bstatic.com/images/hotel/max1024x768/107/107527439.jpg"
        />
      </Variation>
    </PageBase>
  );
};

export default ImagePage;
