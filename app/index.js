import { Image, ScrollView, Text, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { CalendarDaysIcon } from "react-native-heroicons/outline";
import { useTheme } from "@react-navigation/native";

export default function Index() {
  return (
    <SafeAreaView className="bg-black h-full p-5 text-white">
      <View className="mx-4 flex flex-row flex-1 items-center ">
        <Text className=" text-white text-2xl">HomeScreen</Text>
        <Text className=" text-white ">HomeScreen</Text>
      </View>

      <View className="flex-row justify-center">
        <Image
          source={require("../assets/images1/partlycloudy.png")}
          className="w-40 h-40"
        />
      </View>

      <View className="space-y-2">
        <Text className="text-center font-bold text-white text-6xl ml-5">
          23 C
        </Text>

        <Text className="text-center font-bold text-white text-xl ml-5">
          Partly Cloudy
        </Text>
      </View>

      <View className="flex-row justify-between mx-4">
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require("../assets/icons/wind.png")}
            className="w-6 h-6"
          />

          <Text className="text-white font-semibold text-base">22km</Text>
        </View>

        <View className="flex-row space-x-2 items-center">
          <Image
            source={require("../assets/icons/drop.png")}
            className="w-6 h-6"
          />

          <Text className="text-white font-semibold text-base">22%</Text>
        </View>

        <View className="flex-row space-x-2 items-center">
          <Image
            source={require("../assets/icons/sun.png")}
            className="w-6 h-6"
          />

          <Text className="text-white font-semibold text-base">6:05AM</Text>
        </View>
      </View>

      <View className="mb-2 space-y-3 my-4">
        <View className="flex-row items-center mx-5 space-x-2">
          <CalendarDaysIcon size="22" color="white" />

          <Text className="text-white text-base">Daily Forecast </Text>
        </View>

        <ScrollView
          horizontal
          contentContainerStyle={{ paddingHorizontal: 15 }}
          showsHorizontalScrollIndicator={false}
        >
          <View
            className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <Image
              source={require("../assets/images1/heavyrain.png")}
              className="h-11 w-11"
            />

            <Text className="text-white">Monday</Text>
            <Text className="text-white font-semibold text-xl">13</Text>
          </View>

          <View
            className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <Image
              source={require("../assets/images1/heavyrain.png")}
              className="h-11 w-11"
            />

            <Text className="text-white">Monday</Text>
            <Text className="text-white font-semibold text-xl">13</Text>
          </View>

          <View
            className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <Image
              source={require("../assets/images1/heavyrain.png")}
              className="h-11 w-11"
            />

            <Text className="text-white">Monday</Text>
            <Text className="text-white font-semibold text-xl">13</Text>
          </View>

          <View
            className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <Image
              source={require("../assets/images1/heavyrain.png")}
              className="h-11 w-11"
            />

            <Text className="text-white">Monday</Text>
            <Text className="text-white font-semibold text-xl">13</Text>
          </View>

          <View
            className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <Image
              source={require("../assets/images1/heavyrain.png")}
              className="h-11 w-11"
            />

            <Text className="text-white">Monday</Text>
            <Text className="text-white font-semibold text-xl">13</Text>
          </View>

          <View
            className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <Image
              source={require("../assets/images1/heavyrain.png")}
              className="h-11 w-11"
            />

            <Text className="text-white">Monday</Text>
            <Text className="text-white font-semibold text-xl">13</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
