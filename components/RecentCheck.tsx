import { View, StyleSheet, ScrollView, Text } from "react-native";
import CheckResultOverview from "./CheckResultOverview";

interface RecentCheckProps {
  boxWidth: number;
  boxHeight: number;
}

export default function RecentCheck({ boxWidth, boxHeight }: RecentCheckProps) {
  const demoData = [
    {
      emoji: "🔒",
      title: "遠離詐騙風險",
      dangerousLevel: "低",
      suggestion: "無風險",
    },
    {
      emoji: "🚨",
      title: "疑似詐騙對話！",
      dangerousLevel: "高",
      suggestion: "立即檢測",
    },
    {
      emoji: "📞",
      title: "風險高的電話號碼！",
      dangerousLevel: "中",
      suggestion: "請注意",
    },
    {
      emoji: "🛡️",
      title: "黑名單管理",
      dangerousLevel: "低",
      suggestion: "無風險",
    },
    {
      emoji: "🧠",
      title: "學習如何防詐騙",
      dangerousLevel: "低",
      suggestion: "無風險",
    },
    {
      emoji: "🔒",
      title: "遠離詐騙風險",
      dangerousLevel: "低",
      suggestion: "無風險",
    },
    {
      emoji: "🚨",
      title: "疑似詐騙對話！",
      dangerousLevel: "高",
      suggestion: "立即檢測",
    },
    {
      emoji: "📞",
      title: "風險高的電話號碼！",
      dangerousLevel: "中",
      suggestion: "請注意",
    },
    {
      emoji: "🛡️",
      title: "黑名單管理",
      dangerousLevel: "低",
      suggestion: "無風險",
    },
    {
      emoji: "🧠",
      title: "學習如何防詐騙",
      dangerousLevel: "低",
      suggestion: "無風險",
    },
  ];

  return (
    <View style={[styles.whiteArea, { width: boxWidth, height: boxHeight }]}>
      <View style={styles.flexOne}>
        <Text style={styles.titleText}>最近檢測</Text>
        <Text style={styles.subtitleText}>您最近的檢測結果</Text>
        <ScrollView style={{ marginTop: 10 }}>
          {demoData.map((data, index) => (
            <CheckResultOverview key={index} {...data} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  whiteArea: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginVertical: 15,
    alignSelf: "center",
  },
  flexOne: {
    flex: 1,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitleText: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});
