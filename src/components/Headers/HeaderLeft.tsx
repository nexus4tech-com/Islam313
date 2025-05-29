import React from 'react';
import { View, ViewProps } from 'react-native';

type HeaderLeftProps = ViewProps & {
  children?: React.ReactNode;
};

const HeaderLeft = ({ children, ...props }: HeaderLeftProps) => (
  <View {...props}>{children}</View>
);

export default React.memo(HeaderLeft);
