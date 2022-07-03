import React from 'react';
import { Text } from 'react-native';

import PageTitleStyles from './PageTitleStyles';

interface Props {
  text: string;
  style: any;
}

const PageTitle = ({ text, style }: Props) => {
  return <Text style={{ ...PageTitleStyles.title, ...style }}>{text}</Text>;
};

export default PageTitle;
