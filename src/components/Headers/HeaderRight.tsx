import React from 'react';
import {TouchableOpacity, View, ViewProps} from 'react-native';

type HeaderRightProps = ViewProps & {
  onPress?: () => void;
  children?: React.ReactNode;
};

const HeaderRight = ({ onPress, children, ...props }: HeaderRightProps) => {
  return onPress ? (
    <TouchableOpacity onPress={onPress} {...props}>
      {children}
    </TouchableOpacity>
  ) : (
    <View {...props}>{children}</View>
  );};

export default React.memo(HeaderRight);
