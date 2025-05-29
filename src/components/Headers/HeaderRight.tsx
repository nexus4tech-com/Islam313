import React from 'react';
import { View, ViewProps } from 'react-native';

type HeaderRightProps = ViewProps & {
  children?: React.ReactNode;
};

const HeaderRight = ({ children, ...props }: HeaderRightProps) => (
  <View {...props}>{children}</View>
);

export default React.memo(HeaderRight);
