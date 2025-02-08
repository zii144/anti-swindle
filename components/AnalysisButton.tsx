import { useState } from "react";
import { View, Text, Button, StyleSheet, Alert, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";

import { API_URL } from "@env";
import { API_KEY } from "@env";

interface AnalysisButtonProps {
  screenWidth: number;
}

export default function AnalysisButton({ screenWidth }: AnalysisButtonProps) {
  const [fileContent, setFileContent] = useState<string | null>(null);

  const selectFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "text/plain", // Only allow .txt files
        copyToCacheDirectory: true, // Ensure the file is accessible in the cache directory
      });

      if (result) {
        const content = await FileSystem.readAsStringAsync(
          result.assets[0].uri,
          {
            encoding: FileSystem.EncodingType.UTF8,
          }
        );

        setFileContent(content); // Save file content
        Alert.alert("成功", "檔案已成功上傳");
        sendToOpenAI(content);
      } else {
        Alert.alert("失敗", "上傳動作已取消");
      }
    } catch (error) {
      console.error("Error selecting file:", error);
      Alert.alert("失敗", "選擇檔案時發生錯誤");
    }
  };

  const sendToOpenAI = async (content: string) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "user", content },
            {
              role: "developer",
              content:
                "只能親切地用繁體中文回應,協助用戶分析TXT文件，推測對話牽涉詐騙的可能性，最後需要列點式提出：1. 詐騙的可能性：高、中、低、未知2. 疑點：三個需要防範的地方3. 提防事項：兩項4. 詐騙可能百分比5. 其他建議",
            },
          ],
        }),
      });

      const data = await response.json();

      if (data.choices && data.choices[0].message) {
        Alert.alert("Response from OpenAI", data.choices[0].message.content);
        console.log(data);
      } else {
        Alert.alert("失敗", "無法從 OpenAI 取得回應");
      }
    } catch (error) {
      console.error("失敗", error);
      Alert.alert("失敗", "無法與 OpenAI 進行通訊，請檢查網路連線或稍後再試");
    }
  };

  return (
    <LinearGradient
      colors={["#f7ba2c", "#ea5459"]}
      style={[styles.button, { width: screenWidth * 0.9 }]}
    >
      <Pressable onPress={() => selectFile()}>
        <Text style={styles.buttonText}>上傳新的對話紀錄</Text>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    alignSelf: "center",
    paddingVertical: 12,
    borderRadius: 15,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
