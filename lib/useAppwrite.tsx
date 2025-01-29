import { isLoading } from "expo-font";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Models } from "react-native-appwrite";

const useAppwrite = (fn : any) => {
  const [data, setData] = useState<
    Models.DocumentList<Models.Document> | undefined
  >(undefined);
  const [isloading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fn();

      setData(response);
    } catch (error: any) {
      Alert.alert("Error in fetching AllPosts", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();

  return { data, refetch, isLoading };

  console.log(data);
};

export default useAppwrite;
