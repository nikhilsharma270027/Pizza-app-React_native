import {
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  Text,
  View,
  Pressable,
} from "react-native";
// import icons, { BotIcon } from  'lucide-react-native'
import { MotiView } from 'moti'
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInRight, LayoutAnimationConfig, LinearTransition } from "react-native-reanimated";

// type IconNames = keyof typeof Icon;
type TabItem = {
  key: number;
  // icon: IconNames;
  label: string;
};

type TabsProps = {
  data: TabItem[];
  selectedIndex: number;
  onChange: (index: number) => void;
  activeColor?: string;
  inactiveColor?: string;
  activeBackgroundColor?: string;
  inactiveBackgroundColor?: string;
};
// type IconProp = {
//   name: IconNames;
// };
// function Icon({ name }: IconProp) {
//   const IconComponent = icons[name];
//   if (!IconComponent) {
//     console.warn(`Icon "${name}" not found.`);
//     return null;
//   }
//   return <IconComponent size={16} />;
// }

export default function Tabs({
  data = [],
  selectedIndex,
  onChange,
  activeColor = "#fff",
  inactiveColor = "#999",
  activeBackgroundColor = "#111",
  inactiveBackgroundColor = "#ddd",
}: TabsProps) {
  return (
    <View style={{ flexDirection: "row", gap: _spacing }}>
      {/* <Text style={{backgroundColor: "red", top: 10}}>Hey</Text> */}
      {data.map((item, index) => {
        const isSelected = selectedIndex === index;
        return (
          <MotiView
            animate={{
              backgroundColor: isSelected ? activeBackgroundColor : inactiveBackgroundColor,
              overflow: "hidden",
              borderRadius: 8,
            }}
            layout={LinearTransition.springify().damping(80).stiffness(200)}
          key={item.key}>
            <Pressable
              onPress={() => onChange(index)}
              style={{
                padding: _spacing * 3, 
                justifyContent: "center",
                alignItems: "center",
                gap: _spacing,
                flexDirection: "row",
                backgroundColor: isSelected ? activeBackgroundColor : inactiveBackgroundColor,
                borderRadius: 8,
              }}>
              {/* <BotIcon size={16} /> */}
              <Ionicons name="menu" size={32} color="green" />
              {isSelected && (
              <LayoutAnimationConfig skipEntering>
                <Animated.Text
                entering={FadeInRight.springify().damping(80).stiffness(200)}
                exiting={FadeInRight.springify().damping(80).stiffness(200)}
                style={{
                  color: isSelected ? activeColor : inactiveColor,
                }}>
                {item.label}
              </Animated.Text>
              </LayoutAnimationConfig>
              )}
            </Pressable>
          </MotiView>
        );
      })}
    </View>
  );
}
const _spacing = 4;
// const styles = StyleSheet.create({
//   pressable : {
//     padding: _spacing,
//     justifyContent: "center",
//     alignItems: "center",
//     gap: _spacing,
//     flexDirection: "row",
//     backgroundColor: isSelected ? active :"";
//   },

// });
