import { View, Text, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import { LineChart } from "react-native-gifted-charts";
import { LinearGradient } from "expo-linear-gradient";

const LastWeekActivity = () => {
  const [chartWidth, setChartWidth] = useState(0);
  const [chartHeight, setChartHeight] = useState(0);

  const handleLayout = (e) => {
    const { width } = e.nativeEvent.layout;
    const { height } = e.nativeEvent.layout;
    setChartWidth(width * 0.85);
    setChartHeight(height * 0.7);
  };

  const data = [
    { value: 15, label: "Mon" },
    { value: 9, label: "Tue" },
    { value: 5, label: "Wed" },
    { value: 12, label: "Thu" },
    { value: 8, label: "Fri" },
    { value: 24, label: "Sat" },
    { value: 50, label: "Sun" },
  ];

  return (
    <LinearGradient
      colors={["#1C1C1E", "#212124"]}
      start={[0, 0]}
      end={[1, 0]}
      style={{
        overflow: "hidden",
        borderRadius: 24,
        marginBottom: 4,
        marginTop: 4,
      }}
    >
      <View onLayout={handleLayout} className=" p-4 ">
        {chartWidth && (
          <View className="ml-6 max-h-[200px]">
            <LineChart
              className="border-2"
              hideDataPoints
              hideYAxisText
              isAnimated
              showVerticalLines
              hideRules
              width={chartWidth}
              height={chartHeight}
              data={data}
              spacing={40}
              yAxisThickness={0}
              xAxisThickness={0}
              xAxisLabelTextStyle={{ color: "#EB7363" }}
              thickness={5}
              color="#EB7363"
            />
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

export default LastWeekActivity;
