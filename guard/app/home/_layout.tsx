    import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Tabs} from "expo-router";


export default function HomeLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'red' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: 'Scan',
          tabBarIcon: ({ color }) => <FontAwesome name="qrcode" size={24} color={color}/>,
        }}
      />
      <Tabs.Screen
      name="profile"
      options={{
        title: 'Profile',
        tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />,
      }}
    />
    </Tabs>
  )
}
