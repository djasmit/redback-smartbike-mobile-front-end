import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '4',
    strokeWidth: '2',
    stroke: '#007bff',
  },
};

const defaultLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const defaultData = [30, 20, 60, 50, 30, 60, 30];

const Statistics = () => {
  const [workoutData, setWorkoutData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace this URL with your real API endpoint
        const response = await fetch('https://mocki.io/v1/9ac6c13b-bc9d-4c97-8ae8-7f0ec82324dc');
        const json = await response.json();
        setWorkoutData(json.data);
      } catch (error) {
        console.error('Error fetching workout data:', error);
        setWorkoutData([]); // fallback to empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getChartData = () => {
    if (!workoutData || workoutData.length === 0) {
      return {
        labels: defaultLabels,
        datasets: [{ data: defaultData }],
      };
    }

    return {
      labels: workoutData.map((item) => item.day),
      datasets: [
        {
          data: workoutData.map((item) => Number(item.minutes)),
          color: () => '#007bff',
          strokeWidth: 2,
        },
      ],
    };
  };

  const getTotalMinutes = () => {
    return workoutData.reduce((sum, item) => sum + Number(item.minutes), 0);
  };

  const getActiveDays = () => {
    return workoutData.filter((item) => Number(item.minutes) > 0).length;
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>🚴 Weekly Workout Summary</Text>
          <Text style={styles.description}>
            Track your daily workout performance to stay consistent and smash your fitness goals!
          </Text>

          {loading ? (
            <ActivityIndicator size="large" color="#007bff" style={{ marginTop: 20 }} />
          ) : (
            <>
              <LineChart
                data={getChartData()}
                width={screenWidth - 32}
                height={220}
                chartConfig={chartConfig}
                bezier
                style={styles.chart}
              />

              <View style={styles.statsCard}>
                <Text style={styles.statsText}>
                  🕒 Total Minutes: <Text style={styles.bold}>{getTotalMinutes()} mins</Text>
                </Text>
                <Text style={styles.statsText}>
                  📅 Active Days: <Text style={styles.bold}>{getActiveDays()} days</Text>
                </Text>
              </View>

              <View style={styles.messageBox}>
                <Text style={styles.motivation}>
                  {getActiveDays() >= 5
                    ? "🔥 Great job! You're staying consistent!"
                    : '💪 Keep going! Try to stay active every day!'}
                </Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f8f9fa',
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
    color: '#007bff',
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 16,
  },
  chart: {
    borderRadius: 16,
    marginBottom: 16,
  },
  statsCard: {
    backgroundColor: '#e9f5ff',
    borderRadius: 12,
    padding: 12,
    marginTop: 10,
    marginBottom: 16,
  },
  statsText: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },
  bold: {
    fontWeight: '600',
    color: '#007bff',
  },
  messageBox: {
    padding: 12,
    backgroundColor: '#fff3cd',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f9fafaff',
  },
  motivation: {
    fontSize: 15,
    color: '#826613ff',
    textAlign: 'center',
  },
});

export default Statistics;





