import { Feather, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

export default function HomeScreen() {
  const radius = 19;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;
  const progress = 0.75;
  const strokeDashoffset = circumference * (1 - progress);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View
        style={{
          height: "33%",
          backgroundColor: "#01d6d6",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      ></View>

      {/* Scrollable Content */}
      <ScrollView
        style={{ flex: 1, width: "100%" }}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: "20%",
        }}
      >
        <View style={styles.head_home}>
          <View>
            <Image
              source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
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
            <Text
              style={{
                color: "#01d6d6",
                backgroundColor: "#FFFFFFCC",
                paddingHorizontal: 6,
                paddingVertical: 2,
                borderRadius: 6,
                alignSelf: "flex-start",
              }}
            >
              Nhân viên
            </Text>
          </View>
          <View>
            <FontAwesome name="bell-o" size={30} color="white" />
          </View>
        </View>
        <View style={styles.component}>
          <View style={styles.componentfirst}>
            {/* Card Ca hôm nay */}
            <View style={styles.head_first}>
              <Text style={{ fontSize: 14, color: "#a2b5b5ff" }}>
                Ca hôm nay
              </Text>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Feather name="phone" size={24} color="#a2b5b5ff" />
                <Feather name="message-circle" size={24} color="#a2b5b5ff" />
              </View>
            </View>

            <View style={styles.head_time}>
              <Text
                style={{ fontSize: 16, color: "black", fontWeight: "bold" }}
              >
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
                  <Circle
                    cx="24"
                    cy="24"
                    r={radius}
                    stroke="#e6eeff"
                    strokeWidth={strokeWidth}
                    fill="none"
                  />
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
                  Còn <Text style={styles.bold}>40 phút</Text> nữa tới giờ làm.
                  Hãy chuẩn bị ngay
                </Text>
              </View>
            </View>

            <View
              style={{ height: 1, backgroundColor: "#ccc", marginVertical: 10 }}
            />

            <View style={styles.head_time}>
              <Text
                style={{ fontSize: 16, color: "black", fontWeight: "bold" }}
              >
                08:00 - 16:00
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Link href="/profile/123" asChild>
                  <Text style={styles.buttonText}>Ca sắp tới</Text>
                </Link>
                <Feather name="chevron-right" size={20} color="#3b76da" />
              </View>
            </View>
          </View>

          {/* Component thứ 2 */}
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

          <View style={styles.componentfirst}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Bạn cảm thấy hôm nay thế nào
            </Text>
            <View style={styles.iconeffect}>
              <Image
                source={require("../../assets/images/icon.gif")}
                style={{ width: 44, height: 44 }}
              />
              <Image
                source={require("../../assets/images/icon2.gif")}
                style={{ width: 44, height: 44 }}
              />
              <Image
                source={require("../../assets/images/icon3.gif")}
                style={{ width: 44, height: 44 }}
              />
              <Image
                source={require("../../assets/images/icon4.gif")}
                style={{ width: 44, height: 44 }}
              />
              <Image
                source={require("../../assets/images/icon5.gif")}
                style={{ width: 44, height: 44 }}
              />
            </View>
          </View>
          <View style={styles.componentthirst}>
            <View style={styles.head_first}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Feather name="map-pin" size={24} color="red" /> Nhiệm vụ hôm
                nay
              </Text>
              <Link href="/profile/123" asChild>
                <Text style={styles.buttonText}>+ Thêm nhiệm vụ</Text>
              </Link>
            </View>
            <View style={styles.mission}>
              <View
                style={[
                  styles.itemmission,
                  { paddingLeft: 2, paddingBottom: 10 },
                ]}
              >
                <Checkbox
                  value={checked1}
                  onValueChange={setChecked1}
                  color={checked1 ? "#4630EB" : "#ccc"} // màu khi checked
                />
                <Text style={{ marginLeft: 8 }}>Kiểm kê kho cuối ngày</Text>
              </View>
              <View
                style={[
                  styles.itemmission,
                  { paddingLeft: 2, paddingBottom: 10 },
                ]}
              >
                <Checkbox
                  value={checked2}
                  onValueChange={setChecked2}
                  color={checked2 ? "#4630EB" : "#ccc"} // màu khi checked
                />
                <Text style={{ marginLeft: 8 }}>
                  Bàn giao công việc cho ca sau
                </Text>
              </View>
              <View
                style={[
                  styles.itemmission,
                  { paddingLeft: 2, paddingBottom: 10 },
                ]}
              >
                <Checkbox
                  value={checked3}
                  onValueChange={setChecked3}
                  color={checked3 ? "#4630EB" : "#ccc"} // màu khi checked
                />
                <Text style={{ marginLeft: 8 }}>
                  Ghi nhận KPI khách hàng phản hồi
                </Text>
              </View>
              <Link href="/profile/123" asChild>
                <Text style={styles.buttonText}>Xem thêm</Text>
              </Link>
            </View>
          </View>
          <View style={styles.componentfirst}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                display: "flex",
                alignItems: "center",
              }}
            >
              Thống kê
            </Text>
            <View style={styles.headstatistical}>
              <View
                style={[
                  styles.itemheadstatistical,
                  { backgroundColor: "#F5F8FD", width: "48%" },
                ]}
              >
                <View
                  style={{
                    backgroundColor: "#D8E4F8",
                    alignSelf: "flex-start",
                    padding: 10,
                    borderRadius: "50%",
                  }}
                >
                  <Feather name="calendar" size={24} color="#3B76DA" />
                </View>
                <Text style={{ fontSize: 14 }}>Số ca đã làm</Text>
              </View>
              <View
                style={[
                  styles.itemheadstatistical,
                  { backgroundColor: "#E7F8F0", width: "48%" },
                ]}
              >
                <View
                  style={{
                    backgroundColor: "#D0F1E1",
                    alignSelf: "flex-start",
                    padding: 10,
                    borderRadius: "50%",
                  }}
                >
                  <Feather name="file-text" size={24} color="#12B76A" />
                </View>
                <Text style={{ fontSize: 14 }}>Công việc hoàn thành</Text>
              </View>
            </View>
            <View
              style={[
                styles.itemheadstatistical,
                { backgroundColor: "#FFF9E7", marginTop: 10 },
              ]}
            >
              <View
                style={{
                  backgroundColor: "#FFECB8",
                  alignSelf: "flex-start",
                  padding: 10,
                  borderRadius: "50%",
                }}
              >
                <Feather name="dollar-sign" size={24} color="#FFC013" />
              </View>
              <Text style={{ paddingTop: 5 }}>Lương tích lũy</Text>
              <View style={styles.head_first}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 18, paddingTop: 5 }}
                >
                  2,760,000
                </Text>
                <Link href="/profile/123" asChild>
                  <Text style={styles.buttonText}>Xem tổng quan</Text>
                </Link>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5FFFF" },
  head_home: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    paddingRight: 10,
    gap: 10,
  },
  buttonText: { color: "#3b76da", fontSize: 14 },
  component: { width: "100%" },
  componentfirst: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
  },
  head_first: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  head_time: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  head_weather: {
    paddingTop: 10,
    paddingBottom: 10,
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
  content: { marginLeft: 14, flex: 1 },
  mainText: { fontSize: 15, lineHeight: 20, color: "#0f172a" },
  bold: { fontWeight: "700" },
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    gap: 10,
  },
  iconeffect: {
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  componentthirst: {
    backgroundColor: "#FFF3D1",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
  },
  mission: {
    paddingTop: 10,
  },
  itemmission: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headstatistical: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemheadstatistical: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 5,
    borderRadius: 10,
  },
});
