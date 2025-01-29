// import { View, Text, ScrollView, Image, Alert } from "react-native";
// import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";

// // import { images } from "@/constants";
// import Formfield from "@/components/Formfield";
// import CustomButton from "@/components/CustomButton";
// import { Link, router } from "expo-router";
// import { createUser } from "@/lib/appwrite";
// import { useGlobalContext } from "@/context/GlobalProvider";

// const SignUp = () => {
//   const { setUser, setIsLogged } = useGlobalContext();
//   const [isSubmitting, setSubmitting] = useState(false);
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const submit =async () => {
//     if (form.username === "" || form.email === "" || form.password === "") {
//       Alert.alert("Error", "Please fill in all fields");
//     }

//     setSubmitting(true);

//     try {
      
//       const result = await createUser(form.email, form.password, form.username);
//       Alert.alert(result.data);
//       // console.log(result);
//       setUser(result.data);
//       setIsLogged(true);

//       router.replace("/Home");
//     } catch (error: any) {
//       Alert.alert("Error", error.message);
//     } finally {
//       setSubmitting(false);
//     }
//   };
//   return (
//     <SafeAreaView className="bg-primary h-full">
//       <ScrollView>
//         <View className="w-full justify-center min-h-[85vh] px-4 my-6">
//           <Image
//             source={images.logo}
//             resizeMode="contain"
//             className="w-[115px] h-[35px]"
//           />

//           <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
//             Sign Up to Aora
//           </Text>

//           <Formfield
//             title="Username"
//             value={form.username}
//             handleChangeText={(e: string) => setForm({ ...form, username: e })}
//             otherStyles="mt-10"
//           />
//           <Formfield
//             title="Email"
//             value={form.email}
//             handleChangeText={(e: string) => setForm({ ...form, email: e })}
//             otherStyles="mt-7"
//             keyboardType="email-address"
//           />
//           <Formfield
//             title="Password"
//             value={form.password}
//             handleChangeText={(e: string) => setForm({ ...form, password: e })}
//             otherStyles="mt-7"
//           />
//           <CustomButton
//             title={"Sign Up"}
//             handlePress={submit}
//             containerStyles={"mt-7"}
//             isLoading={isSubmitting}
//           />

//           <View className="flex justify-center pt-5 flex-row gap-2">
//             <Text className="text-lg text-gray-100 font-pregular">
//               Have an account already?
//             </Text>
//             <Link
//               href="/Sign-in"
//               className="text-lg font-psemibold text-secondary">
//               Sign In
//             </Link>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default SignUp;
import React from 'react'

const SignUp = () => {
  return (
    <div>
      
    </div>
  )
}

export default SignUp
