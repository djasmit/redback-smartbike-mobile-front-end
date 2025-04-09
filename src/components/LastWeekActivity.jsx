import { View, Text, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import { BarChart, yAxisSides } from "react-native-gifted-charts";

const LastWeekActivity = () => {
  const [chartWidth, setChartWidth] = useState(0);
  const [chartHeight, setChartHeight] = useState(0);

  const handleLayout = (e) => {
    const { width, height } = e.nativeEvent.layout;
    setChartWidth(width * 0.85);
    setChartHeight(height * 0.7);
  };

  const data = [
    {
      value: 15,
      label: "Mon",
      frontColor: "#EB7363",
      gradientColour: "#ffffff",
    },
    {
      value: 9,
      label: "Tue",
      frontColor: "#EB7363",
      gradientColour: "#EB736350",
    },
    {
      value: 5,
      label: "Wed",
      frontColor: "#EB7363",
      gradientColour: "#EB736350",
    },
    {
      value: 12,
      label: "Thu",
      frontColor: "#EB7363",
      gradientColour: "#EB736350",
    },
    {
      value: 8,
      label: "Fri",
      frontColor: "#EB7363",
      gradientColour: "#EB736350",
    },
    {
      value: 24,
      label: "Sat",
      frontColor: "#EB7363",
      gradientColour: "#EB736350",
    },
    {
      value: 50,
      label: "Sun",
      frontColor: "#EB7363",
      gradientColour: "#EB736350",
    },
  ];

  return (
    <View
      onLayout={handleLayout}
      className="h-[200px] p-4 bg-white rounded-3xl overflow-hidden flex items-center justify-center  w-full"
    >
      {chartHeight > 0 && chartWidth > 0 && (
        <BarChart
          isAnimated
          animationDuration={300}
          hideRules
          height={chartHeight}
          width={chartWidth}
          data={data}
          spacing={25}
          initialSpacing={10}
          endSpacing={5}
          yAxisSide={yAxisSides.RIGHT}
          yAxisThickness={0}
          xAxisThickness={2}
          barWidth={20}
          thickness={1}
          barBorderRadius={3}
          adjustToWidth={true}
          noOfSections={5}
        />
      )}
    </View>
  );
};

export default LastWeekActivity;
