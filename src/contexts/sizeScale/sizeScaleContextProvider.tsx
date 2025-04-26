import React, {useEffect, useState} from 'react';
import {Dimensions, ScaledSize} from 'react-native';
import {REFERENCE_SCREEN_SIZE} from '../../constants/layoutSizeConstants.ts';
import SizeScaleContext from './sizeScaleContext.tsx';

/******************************************************************
 * SizeScaleProvider is a context provider for size scale based
 * upon the width of the device. Size Scale is used
 * to scale the fonts sizes, spacing and dimensions for containers
 * or components like images etc.
 ******************************************************************/
export const SizeScaleProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [screenDimensions, setScreenDimensions] = useState({
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
  });

  useEffect(() => {
    const handleResize = ({window}: {window: ScaledSize}) => {
      setScreenDimensions({
        screenWidth: window.width,
        screenHeight: window.height,
      });
    };

    const subscription = Dimensions.addEventListener('change', handleResize);

    return () => {
      if (subscription?.remove) {
        subscription.remove(); // React Native 0.65+
      } else {
        // Older versions
        // @ts-ignore
        Dimensions?.removeEventListener?.('change', handleResize);
      }
    };
  }, []);

  return (
    <SizeScaleContext.Provider
      value={{
        screenDimensions: screenDimensions,
        sizeScale: (screenDimensions?.screenWidth ?? 0) / REFERENCE_SCREEN_SIZE,
      }}>
      {children}
    </SizeScaleContext.Provider>
  );
};
