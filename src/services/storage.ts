import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToken = async (value: string) => {
  try {
    await AsyncStorage.setItem("@token_key", JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};

export const getToken = async () => {
  try {
    const value: string | null = await AsyncStorage.getItem("@token_key");

    if(value)
    return JSON.parse(value);

    return null;
  } catch (e) {
    console.log(e);
  }
};

export const destroyToken = async () => {
  try {
   AsyncStorage.removeItem("@token_key");
  } catch (e) {
    console.log(e);
  }
};


