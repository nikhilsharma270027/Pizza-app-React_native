import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          title: 'Home',
          headerTitle: "Welcome to Pizza App",
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          headerStyle: {
            backgroundColor: 'red'
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerShown: true,
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
          headerStyle: {
            backgroundColor: 'red'
          },
        }}
        
      />
      <Tabs.Screen
        name="App"
        options={{
          headerShown: true,
          title: 'Bro',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
          headerStyle: {
            backgroundColor: 'red'
          },
        }}
      />
      <Tabs.Screen
        name="Discount"
        options={{
          headerShown: true,
          title: 'Bro',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
          headerStyle: {
            backgroundColor: 'red'
          },
        }}
      />
    </Tabs>
  );
}
