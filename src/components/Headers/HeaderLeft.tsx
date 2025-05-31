import React from 'react';
import {TouchableOpacity, View, ViewProps} from 'react-native';

type HeaderLeftProps = ViewProps & {
  onPress?: () => void;
  children?: React.ReactNode;
};

const HeaderLeft = ({ onPress, children, ...props }: HeaderLeftProps) => {
return onPress ? (
  <TouchableOpacity onPress={onPress} {...props}>
    {children}
  </TouchableOpacity>
) : (
  <View {...props}>{children}</View>
);
};

export default React.memo(HeaderLeft);
