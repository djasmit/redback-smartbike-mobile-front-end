import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function FriendsScreen() {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
        👥 Friends & Groups
      </Text>

      {/* Add Friend Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#2563eb',
          padding: 12,
          borderRadius: 12,
          marginBottom: 16,
        }}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: '600' }}>
          + Add Friend
        </Text>
      </TouchableOpacity>

      {/* Group Example 1 */}
      <View
        style={{
          backgroundColor: '#f3f4f6',
          padding: 16,
          borderRadius: 16,
          marginBottom: 12,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: '500' }}>🏁 Fitness Squad</Text>
        <Text style={{ color: '#6b7280' }}>Goal: 100km this week</Text>
        <Text style={{ color: '#6b7280' }}>Progress: 62km</Text>
      </View>

      {/* Group Example 2 */}
      <View
        style={{
          backgroundColor: '#f3f4f6',
          padding: 16,
          borderRadius: 16,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: '500' }}>🚴‍♀️ Hill Climbers</Text>
        <Text style={{ color: '#6b7280' }}>Goal: 200 mins ride</Text>
        <Text style={{ color: '#6b7280' }}>Progress: 110 mins</Text>
      </View>
    </ScrollView>
  );
}
