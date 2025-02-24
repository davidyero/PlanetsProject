import AsyncStorage from '@react-native-async-storage/async-storage';

export const useLocalStorage = () => {
  const setItem = (key: string, value: string) => {
    AsyncStorage.setItem(key, value);
  };

  const getItem = async (key: string) => {
    return await AsyncStorage.getItem(key);
  };

  const removeItem = (key: string) => {
    AsyncStorage.removeItem(key);
  };

  const clear = () => {
    AsyncStorage.clear();
  };

  return {
    setItem,
    getItem,
    removeItem,
    clear,
  };
};
