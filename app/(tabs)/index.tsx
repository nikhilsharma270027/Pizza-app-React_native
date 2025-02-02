// import React, { useState } from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   ScrollView,
//   FlatList,
//   RefreshControl,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import menuData from "../../Data/menu.json";
// import useAppwrite from "@/lib/useAppwrite";
// import { getAllPizza } from "@/lib/appwrite";
// import EmptyState from "@/components/EmptyState";
// import ImageCard from "@/components/ImageCard";
// import { Link } from "expo-router";
// import { useGlobalContext } from "@/context/GlobalProvider";
// // interface Item {
// //   key: number;
// //   name: string;
// // }
// interface user {
//   username: string;
// }

// const MenuTab: any = [
//   { key: 1, name: "Starters" },
//   { key: 2, name: "Italian" },
//   { key: 3, name: "Mexican" },
//   { key: 4, name: "Classical" },
//   { key: 5, name: "Grilled" },
// ];

// export default function Index() {
//   const { user, setUser, setIsLogged } = useGlobalContext();
//   const { data: pizza, isLoading, refetch } = useAppwrite(getAllPizza);
//   const [selectedCategory, setSelectedCategory] = useState("Starters")
//   const category = "starters";
//   console.log(pizza);

//   const filteredMenu = pizza?.documents.filter(
//     (item) => item.category === selectedCategory
//   ) || [];

//   const [refreshing, setRefreshing] = useState(false);

//   const onRefresh = async () => {
//     setRefreshing(true);
//     // re call videos -> if any new vedios appeared
//     await refetch();
//     setRefreshing(false);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.view2}>
//         {/* <View style={styles.viewRow}>
//           {MenuTab.map((item: any) => (
//             <Text style={styles.text} key={item.key}>
//               {item.name}
//             </Text>
//           ))}
//         </View> */}
//         <FlatList
//           //data: It is basically an array of data.
//           // data={[{ id: 1}, { id: 2}, { id: 3}]}
//           // data={[]}
//           data={pizza?.documents || []}
//           //keyExtractor: It is used to extract the unique key for the given item.
//           keyExtractor={(item): any => item.$id}
//           //his explains react native how we want to render each item in the list
//           // we can destruct from eaxh item
//           renderItem={({ item }) => (
//             <ImageCard
//               name={item.name}
//               description={item.description}
//               image={item.image}
//               price={item.price}
//             />
//           )}
//           numColumns={2}
//           // columnWrapperStyle={styles.row} // Adds spacing between columns
//           //ListHeaderComponent: It is rendered at the top of all the items.
//           ListHeaderComponent={() => (
//             <View className="flex my-6 px-4 space-y-6">
//               <View className="justify-start items-start flex-row m-6">
//                 <View className="">
//                   <Text className="font-pmedium text-xl text text-red-500">
//                     Welcome back
//                   </Text>
//                   <Text className="text-2xl font-psemibold text-red">
//                     {/* @ts-ignore */}
//                     {user?.username}
//                   </Text>
//                   <View style={styles.viewRow}>
//                     {MenuTab.map((item: any) => (
//                       <Text style={styles.text} key={item.key}>
//                         {item.name}
//                       </Text>
//                     ))}
//                   </View>
//                 </View>
//                 <View className="flex justify-center pt-5 flex-row gap-2">
//                   <Text className="text-lg text-gray-100 font-pregular">
//                     Don't have an account?
//                   </Text>
//                   <Link
//                     href="/Sign-in"
//                     className="text-lg font-psemibold text-secondary">
//                     Signup
//                   </Link>
//                 </View>
//               </View>

//               {/* <SearchInput />

//           <View className='w-full flex-1 pt-5 pb-8'>
//             <Text className='text-gray-100 text-lg font-pregular mg-3'>
//               Latest Videos
//             </Text>
            
//             <Trending posts={latestPosts?.documents || []}/> */}
//               {/* </View> */}
//             </View>
//           )}
//           ListEmptyComponent={() => (
//             <EmptyState
//               title="No Videos Found"
//               subtitle="Be the first one to upload a vedio"
//             />
//           )}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ECE4D9",
//     justifyContent: "flex-start", // Ensures it aligns at the top
//     margin: 1,
//   },
//   view2: {
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     padding: 8,
//     marginTop: 20, // Adds a little space from the top
//   },
//   viewRow: {
//     flexDirection: "row",
//     justifyContent: "flex-start", // Ensures text is aligned from the start
//     gap: 20,
//     flexWrap: "wrap", // Allows wrapping if the content exceeds screen width
//   },
//   text: {
//     fontSize: 12,
//     backgroundColor: "#FAB678",
//     borderRadius: 50,
//     padding: 10,
//     paddingRight: 10,
//     paddingLeft: 10,
//     paddingHorizontal: 6,
//     textAlign: "center", // Centers the text within the button-like view
//   },
//   containerr: {
//     flex: 1,
//     backgroundColor: "#f8f8f8",
//   },
//   menuItem: {
//     backgroundColor: "#fff",
//     padding: 16,
//     marginBottom: 10,
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   menuName: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   menuDescription: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   menuPrice: {
//     fontSize: 18,
//     color: "#ff5722",
//   },
// });


import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import menuData from "../../Data/menu.json";
import useAppwrite from "@/lib/useAppwrite";
import { getAllPizza } from "@/lib/appwrite";
import EmptyState from "@/components/EmptyState";
import ImageCard from "@/components/ImageCard";
import { Link } from "expo-router";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useCart } from "@/context/CartContext";
import { Models } from "react-native-appwrite";
interface CartItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}


const MenuTab = [
  { key: "Starters", name: "Starters" },
  { key: "Italian", name: "Italian" },
  { key: "Mexican", name: "Mexican" },
  { key: "Classical", name: "Classical" },
  { key: "Grilled", name: "Grilled" },
];
// type CartItem = {
  //   id: number;
  //   name: string;
  //   price: number;
  // };
  
  export default function Index() {
    const { user } = useGlobalContext();
    const { data: pizza, isLoading, refetch } = useAppwrite(getAllPizza);
    const {addToCart: any} = useCart();
    
  const [selectedCategory, setSelectedCategory] = useState("Starters");
  const [refreshing, setRefreshing] = useState(false);
  const [cart, setCart] = useState([]);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const filteredMenu = pizza?.documents.filter(
    (item) => item.category === selectedCategory
  ) || [];

  const addToCart = (item: Models.Document) => {
    const cartItem: CartItem = {
      id: item.$id,  // Assuming the Document has the $id property
      name: item.name,
      price: item.price,
      description: item.description,
      image: item.image,
    };
    setCart((prevCart): any => [...prevCart, cartItem]);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view2}>
        <View className="flex my-0 px-4 space-y-6">
          <View className="justify-start items-start flex-row m-6">
            <View>
              <Text className="font-pmedium text-xl text-red-500">
                Welcome back
              </Text>
              <Text className="text-2xl font-psemibold text-red">
                {/* @ts-ignore */}
                {user?.username}
              </Text>
            </View>
          </View>

          {/* Render Category Tabs */}
          <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  style={styles.menuTabContainer}
>
  {MenuTab.map((item) => (
    <Text
      key={item.key}
      style={[
        styles.text,
        selectedCategory === item.name && styles.activeTab
      ]}
      onPress={() => setSelectedCategory(item.name)}
    >
      {item.name}
    </Text>
  ))}
</ScrollView>
        </View>

        {/* Render Pizza Cards */}
        <FlatList
          data={filteredMenu}
          keyExtractor={(item) => item.$id}
          renderItem={({ item }) => (
            <ImageCard
              name={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
              onAddToCart={() => addToCart(item)}
            />
          )}
          numColumns={2}
          ListEmptyComponent={() => (
            <EmptyState
              title="No Items Found"
              subtitle="Please select a different category"
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
    marginTop: -63,
    flex: 1,
    backgroundColor: "#ECE4D9",
  },
  view2: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    marginTop: 20,
  },
  // viewRow: {
  //   flexDirection: "row",
  //   justifyContent: "flex-start",
  //   gap: 10,
  //   flexWrap: "wrap",
  // },
  // text: {
  //   fontSize: 14,
  //   backgroundColor: "#FAB678",
  //   borderRadius: 20,
  //   padding: 10,
  //   textAlign: "center",
  // },
  activeTab: {
    backgroundColor: "#FF5733",
    color: "#fff",
  },
  menuTabContainer: {
    paddingVertical: 10,
    marginBottom: 8,
    flexGrow: 0,
  },
  viewRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  text: {
    fontSize: 14,
    backgroundColor: "#FAB678",
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 15,
    textAlign: "center",
    marginRight: 10,
  },
});
