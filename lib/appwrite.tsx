// import { Platform } from "react-native";

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    Platform: 'com.nikhil.aora',
    projectId: '674ac52e0014f4c52044',
    databaseId: '674ac77d0032bb0cf24b',
    userCollectionId: '674c5ffc002512726d00',
    videoCollectionId: '674ac7cc001c303a8a85',
    storageId: '674ac9ab0009e5925d4b',
}

// init your react-native SDK
import { Client, Account, ID, Avatars, Databases, Query, Storage } from 'react-native-appwrite';

const client = new Client()
client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject('674ac52e0014f4c52044')
    .setPlatform('com.nikhil.aora');


const account = new Account(client);
const avatars = new Avatars(client)
const databases = new Databases(client)
const storage = new Storage(client);