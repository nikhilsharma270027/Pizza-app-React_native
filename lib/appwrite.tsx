// import { Platform } from "react-native";
// import { Client } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    Platform: 'com.nikhil.pizza',
    projectId: '6798eff10028b27c0360',
    pizzaId: '679923b800296e4eac18',
    databaseId: '6798f77b00115830d395',
    userCollectionId: '6798f7900008c8519f9e',
    storageId: '679a45cf002f77bae9c6',
}

// init your react-native SDK
import { Client, Account, ID, Avatars, Databases, Query, Storage } from 'react-native-appwrite';

const client = new Client()
client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject('6798eff10028b27c0360')
    .setPlatform('com.nikhil.pizza');

const account = new Account(client);
const avatars = new Avatars(client)
const databases = new Databases(client)
const storage = new Storage(client);

export const getAllPizza = async () => {
    try {
      const pizza = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.pizzaId,
      )
      return pizza;
    } catch (error: any) {
      throw new Error(error);
    }
  }