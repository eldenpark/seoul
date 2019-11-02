import EmText from 'seoul/emotion/Text';
import React from 'react';
import ScText, { TextProps } from 'seoul/styled/Text';

import { ComponentType } from '@@universal/constants';
import PageBase from '@@universal/components/pages/PageBase';
import Variation from '@@universal/components/pages/Variation';
import useComponentType from '@@universal/hooks/useComponentType';

const heading = 'Heading';
const text = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const TextPage: React.FC<{}> = () => {
  const { Component } = useComponentType<TextProps>({
    [ComponentType.EMOTION]: EmText,
    [ComponentType.STYLED]: ScText,
  });

  return (
    <PageBase pageTitle="Text">
      <Variation typeLabel="default (t8)">
        <Component>{text}</Component>
      </Variation>
      <Variation typeLabel="textType: h4">
        <Component textType="h4">{heading}</Component>
      </Variation>
      <Variation typeLabel="textType: h5">
        <Component textType="h5">{heading}</Component>
      </Variation>
      <Variation typeLabel="textType: h6">
        <Component textType="h6">{heading}</Component>
      </Variation>
      <Variation typeLabel="textType: h7">
        <Component textType="h7">{heading}</Component>
      </Variation>
      <Variation typeLabel="textType: h8">
        <Component textType="h8">{heading}</Component>
      </Variation>
      <Variation typeLabel="textType: t6">
        <Component textType="t6">{text}</Component>
      </Variation>
      <Variation typeLabel="textType: t7">
        <Component textType="t7">{text}</Component>
      </Variation>
      <Variation typeLabel="textType: t8">
        <Component textType="t8">{text}</Component>
      </Variation>
      <Variation typeLabel="textType: t9">
        <Component textType="t9">{text}</Component>
      </Variation>
    </PageBase>
  );
};

export default TextPage;
