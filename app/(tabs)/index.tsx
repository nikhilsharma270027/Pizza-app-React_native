import { Image, StyleSheet, Platform, SafeAreaView, Text, View } from 'react-native';
import { icons } from "lucide-react-native"

type IconNames = keyof typeof icons;
type TabItem = {
  icon: IconNames;
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
}

export default function tabs({
  data,
  selectedIndex,
  onChange
}: TabsProps) {
  return (
    <SafeAreaView>
      <View style={styles.viewer}>
        <Text style={styles.Text}>
          Hey
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewer: {
    backgroundColor: "white"
  },
  Text: {
    backgroundColor: "white",
    top: 10
  }
});
