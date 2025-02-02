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

export const account = new Account(client);
const avatars = new Avatars(client)
const databases = new Databases(client)
const storage = new Storage(client);

export const createUser = async (email: string, password: string, username: string,) => {

  try {
      const newAccount = await account.create(
          ID.unique(),
          email,
          password,
          username
      )
      // if we dont get new Account or new is not created
      if (!newAccount) throw Error;

      const avatarUrl = avatars.getInitials(username)

      await signIn(email, password);

      const newUser = await databases.createDocument(
          appwriteConfig.databaseId,
          appwriteConfig.userCollectionId,
          ID.unique(),
          // object abt user
          { 
              accountId: newAccount.$id,
              email: email,
              username: username,
              avatar: avatarUrl,
          }
      );

      return newUser;
  } catch (error: any) {
      console.log(error);
      throw new Error('user reg error', error)
  }
}

export async function signIn(email: string, password: string) {
  try {
      const session = await account.createEmailPasswordSession(email, password)
      return session;
  } catch (error: any) {
      console.log(error);
      throw new Error('user reg error', error)
  }
}

export async function signOut() {
  try {
    const session = await account.deleteSession('current');

    return session;
  } catch (error: any) {
    throw new Error("Error during signOut",error);
  }
}

// Get Account
export async function getAccount() {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error: any) {
    throw new Error(error);
  }
}

// Get Current User
export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0]; // bcuz we need only one users
  } catch (error: any) {
    console.log(error);
    return null;
  }
}

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