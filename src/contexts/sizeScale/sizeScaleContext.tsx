import {Context, createContext} from 'react';
import {Dimensions} from 'react-native';
import {REFERENCE_SCREEN_SIZE} from '../../constants/layoutSizeConstants.ts';
import {SizeScaleContextValue} from '../../types/sizeScaleContextValue.tsx';

const SizeScaleContext: Context<SizeScaleContextValue> =
  createContext<SizeScaleContextValue>({
    screenDimensions: {
      screenWidth: Dimensions.get('window').width,
      screenHeight: Dimensions.get('window').height,
    },
    sizeScale: (Dimensions.get('window').width ?? 0) / REFERENCE_SCREEN_SIZE,
  });

export default SizeScaleContext;
