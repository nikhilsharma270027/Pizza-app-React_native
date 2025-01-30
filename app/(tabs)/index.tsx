import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import menuData from "../../Data/menu.json";
import useAppwrite from "@/lib/useAppwrite";
import { getAllPizza } from "@/lib/appwrite";
import EmptyState from "@/components/EmptyState";
import ImageCard from "@/components/ImageCard";
import { Link } from "expo-router";
// interface Item {
//   key: number;
//   name: string;
// }

const MenuTab: any = [
  { key: 1, name: "Starters" },
  { key: 2, name: "Italian" },
  { key: 3, name: "Mexican" },
  { key: 4, name: "Classical" },
  { key: 5, name: "Grilled" },
];

export default function Index() {
  const { data: pizza, isLoading, refetch } = useAppwrite(getAllPizza);
  const category = "starters";
  console.log(pizza)

  const filteredMeny = menuData.filter(
    (Itemdata) => Itemdata.category === category
  );

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // re call videos -> if any new vedios appeared
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view2}>
        {/* <View style={styles.viewRow}>
          {MenuTab.map((item: any) => (
            <Text style={styles.text} key={item.key}>
              {item.name}
            </Text>
          ))}
        </View> */}
        <FlatList
          //data: It is basically an array of data.
          // data={[{ id: 1}, { id: 2}, { id: 3}]}
          // data={[]}
          data={pizza?.documents || []}
          //keyExtractor: It is used to extract the unique key for the given item.
          keyExtractor={(item): any => item.$id}
          //his explains react native how we want to render each item in the list
          // we can destruct from eaxh item
          renderItem={({ item }) => (
            <ImageCard
              name={item.name}
              description={item.description}
              image={item.imageUrl}
              price={item.price}
            />
          )}
          numColumns={2}
          // columnWrapperStyle={styles.row} // Adds spacing between columns
          //ListHeaderComponent: It is rendered at the top of all the items.
          ListHeaderComponent={() => (
            <View className="flex my-6 px-4 space-y-6">
              <View className="justify-start items-start flex-row m-6">
                <View className="">
                  <Text className="font-pmedium text-sm text text-gray-100">
                    Welcome back
                  </Text>
                  <Text className="text-2xl font-psemibold text-white">
                    {/* {user?.username} */}Nikhil
                  </Text>
                </View>
                <View style={styles.viewRow}>
          {MenuTab.map((item: any) => (
            <Text style={styles.text} key={item.key}>
              {item.name}
            </Text>
          ))}
        </View>
        <View className="flex justify-center pt-5 flex-row gap-2">
                    <Text className="text-lg text-gray-100 font-pregular">
                      Don't have an account?
                    </Text>
                    <Link
                      href="/Sign-in"
                      className="text-lg font-psemibold text-secondary">
                      Signup
                    </Link>
                  </View>
              </View>

              {/* <SearchInput />

          <View className='w-full flex-1 pt-5 pb-8'>
            <Text className='text-gray-100 text-lg font-pregular mg-3'>
              Latest Videos
            </Text>
            
            <Trending posts={latestPosts?.documents || []}/> */}
              {/* </View> */}
            </View>
          )}
          ListEmptyComponent={() => (
            <EmptyState
              title="No Videos Found"
              subtitle="Be the first one to upload a vedio"
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE4D9",
    justifyContent: "flex-start", // Ensures it aligns at the top
    margin: 1,
  },
  view2: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    marginTop: 20, // Adds a little space from the top
  },
  viewRow: {
    flexDirection: "row",
    justifyContent: "flex-start", // Ensures text is aligned from the start
    gap: 20,
    flexWrap: "wrap", // Allows wrapping if the content exceeds screen width
  },
  text: {
    fontSize: 12,
    backgroundColor: "#FAB678",
    borderRadius: 50,
    padding: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingHorizontal: 6,
    textAlign: "center", // Centers the text within the button-like view
  },
  containerr: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  menuItem: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  menuDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  menuPrice: {
    fontSize: 18,
    color: "#ff5722",
  },
});
