import AsyncStorage from '@react-native-async-storage/async-storage';

const FIRST_LAUNCH_KEY = 'IS_FIRST_LAUNCH';

export const checkFirstLaunch = async (): Promise<boolean> => {
    try {
        const hasLaunched = await AsyncStorage.getItem(FIRST_LAUNCH_KEY);

        if (hasLaunched === null) {
            await AsyncStorage.setItem(FIRST_LAUNCH_KEY, 'true');
            return true; // First launch
        }

        return false; // Not first launch
    } catch (error) {
        console.error('Failed to check first launch:', error);
        return false; // Default to false if error occurs
    }
};

export const resetFirstLaunch = async () => {
    await AsyncStorage.removeItem(FIRST_LAUNCH_KEY);
};
