import { Feather, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

export default function HomeScreen() {
  const radius = 19;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;
  const progress = 0.75; // ví dụ 75%
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <View style={styles.container}>
      <View style={styles.head_home}>
        <View>
          <Image
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
        </View>
        <View style={{ flex: 1, gap: 5 }}>
          <Text style={{ color: "white" }}>
            Chào buổi sáng,{" "}
            <Text style={{ fontWeight: "bold", color: "white" }}>
              Hoàng Minh
            </Text>
          </Text>
          <Text style={{ color: "white" }}>
            Hôm nay bạn đã làm{" "}
            <Text style={{ fontWeight: "bold", color: "white" }}>20</Text> ca
            rồi - tuyệt vời!
          </Text>
        </View>
        <View>
          <FontAwesome name="bell-o" size={30} color="white" />
        </View>
      </View>
      <View style={styles.component}>
        <View style={styles.componentfirst}>
          <View style={styles.head_first}>
            <Text style={{ fontSize: 14, color: "#a2b5b5ff" }}>Ca hôm nay</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Feather name="phone" size={24} color="#a2b5b5ff" />
              <Feather name="message-circle" size={24} color="#a2b5b5ff" />
            </View>
          </View>
          <View style={styles.head_time}>
            <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>
              08:00 - 16:00
            </Text>
            <Link href="/profile/123" asChild>
              <Text style={styles.buttonText}>Yêu cầu nhanh</Text>
            </Link>
          </View>
          <View style={styles.head_weather}>
            <Feather name="cloud-rain" size={24} color="#3b76da" />
            <Text style={{ fontSize: 12, color: "#6C737F" }}>
              Hôm nay trời mưa - nên đi sớm 10 phút
            </Text>
          </View>
          <View style={styles.card}>
            <View style={styles.timer}>
              <Svg
                width={48}
                height={48}
                style={{ transform: [{ rotate: "-90deg" }] }}
              >
                {/* Background circle */}
                <Circle
                  cx="24"
                  cy="24"
                  r={radius}
                  stroke="#e6eeff"
                  strokeWidth={strokeWidth}
                  fill="none"
                />
                {/* Progress circle */}
                <Circle
                  cx="24"
                  cy="24"
                  r={radius}
                  stroke="#2f6ff8"
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${circumference}`}
                  strokeDashoffset={strokeDashoffset}
                />
              </Svg>
              <Text style={styles.timeText}>40:00</Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.mainText}>
                Còn <Text style={styles.bold}>40 phút</Text> nữa tới giờ làm.Hãy
                chuẩn bị ngay
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 1, // chiều cao đường kẻ
              backgroundColor: "#ccc", // màu đường kẻ
              marginVertical: 10, // khoảng cách trên/dưới
            }}
          />
          <View style={styles.head_time}>
            <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>
              08:00 - 16:00
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href="/profile/123" asChild>
                <Text style={styles.buttonText}>Ca sắp tới</Text>
              </Link>
              <Feather name="chevron-right" size={20} color="#3b76da" />
            </View>
          </View>
        </View>
        <View style={styles.componentsecond}>
          <View style={styles.contentone}>
            <Feather name="dollar-sign" size={24} color="#01e1e1" />
            <Text style={{ fontSize: 15 }}>Lương</Text>
          </View>
          <View style={styles.contentone}>
            <FontAwesome5 name="chart-line" size={24} color="#01e1e1" />
            <Text style={{ fontSize: 15 }}>KPI</Text>
          </View>
          <View style={styles.contentone}>
            <Feather name="calendar" size={24} color="#01e1e1" />
            <Text style={{ fontSize: 15 }}>Đặt lịch</Text>
          </View>
          <View style={styles.contentone}>
            <Feather name="bar-chart-2" size={24} color="#01e1e1" />
            <Text style={{ fontSize: 15 }}>Báo cáo</Text>
          </View>
          <View style={styles.contentone}>
            <FontAwesome5 name="rocket" size={24} color="#01e1e1" />
            <Text style={{ fontSize: 15 }}>Trung tâm</Text>
          </View>
          <View style={styles.contentone}>
            <FontAwesome5 name="store" size={24} color="#01e1e1" />
            <Text style={{ fontSize: 15 }}>Nhập hàng</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "##F5FFFF",
  },
  head_home: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "33%",
    backgroundColor: "#01d6d6",
    paddingBottom: 60,
    paddingLeft: 20,
    paddingRight: 20,
    gap: 10,
  },
  buttonText: {
    color: "#3b76da",
    fontSize: 14,
  },
  component: {
    position: "absolute",
    top: "20%",
    width: "100%",
  },
  componentfirst: {
    backgroundColor: "#FFFFFF", // màu nền chính
    width: "100%",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000", // màu bóng
    shadowOffset: { width: 0, height: 2 }, // độ lệch bóng
    shadowOpacity: 0.25, // độ mờ của bóng
    shadowRadius: 3.84, // bán kính bóng
    marginBottom: 20,
  },
  head_first: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  head_time: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  head_weather: {
    paddingTop: 10,
    paddingBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f8fd",
    borderWidth: 1,
    borderColor: "#e9eefc",
    borderRadius: 14,
    padding: 14,
    shadowColor: "#0f172a",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 20,
    elevation: 3,
  },
  timer: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  timeText: {
    position: "absolute",
    fontSize: 11,
    fontWeight: "600",
    color: "#1f2937",
  },
  content: {
    marginLeft: 14,
    flex: 1,
  },
  mainText: {
    fontSize: 15,
    lineHeight: 20,
    color: "#0f172a",
  },
  bold: {
    fontWeight: "700",
  },
  componentsecond: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  contentone: {
    backgroundColor: "#fff",
    width: "31%",
    height: 100,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000", // màu bóng
    shadowOffset: { width: 0, height: 2 }, // độ lệch bóng
    shadowOpacity: 0.25, // độ mờ của bóng
    shadowRadius: 3.84, // bán kính bóng
    gap: 10,
  },
});
