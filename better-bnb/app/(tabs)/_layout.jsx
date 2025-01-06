import { Tabs } from "expo-router";
import { House } from "lucide-react-native";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                headerShown:false,
                tabBarStyle: {
                    height: 60,
                    backgroundColor: 'black'
                }
            }}
        >
            <Tabs.Screen 
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({}) => {
                        <House 
                            color={'white'}
                            size={24}
                        />
                    }
                }}
            />

            <Tabs.Screen 
                name="search"
                options={{
                    title: 'Search',
                }}
            />

            <Tabs.Screen 
                name="bookings"
                options={{
                    title: 'Bookings',
                }}
            />

            <Tabs.Screen 
                name="account"
                options={{
                    title: 'Account',
                }}
            />

        </Tabs>
    )
}
