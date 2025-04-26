import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FontSizeContextType {
  fontSize: number;
  setFontSize: (size: number) => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(
  undefined,
);

export const FontSizeProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [fontSize, setFontSize] = useState<number>(16); 

  useEffect(() => {
    const loadFontSize = async () => {
      const storedFontSize = await AsyncStorage.getItem('fontSize');
      if (storedFontSize) {
        setFontSize(Number(storedFontSize));
      }
    };
    loadFontSize();
  }, []);

  const updateFontSize = async (size: number) => {
    setFontSize(size);
    await AsyncStorage.setItem('fontSize', size.toString());
  };

  return (
    <FontSizeContext.Provider value={{fontSize, setFontSize: updateFontSize}}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = (): FontSizeContextType => {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error('useFontSize must be used within a FontSizeProvider');
  }
  return context;
};
