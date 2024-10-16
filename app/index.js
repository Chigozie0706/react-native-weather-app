import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
  TextInput,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { CalendarDaysIcon } from "react-native-heroicons/outline";
import { useTheme } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { fetchLocations, fetchWeatherForeCast } from "../api/weather";
import { weatherImages } from "../constants";

export default function Index() {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({});

  const handleLocation = (loc) => {
    console.log("location", loc);
    setLocations({});
    fetchWeatherForeCast({
      cityName: loc.name,
      days: "7",
    }).then((data) => {
      setWeather(data);
      console.log("got data", data);
    });
  };

  const handleSearch = (value) => {
    if (value.length > 2) {
      fetchLocations({ cityName: value }).then((data) => {
        console.log("got location", data);
        setLocations(data);
      });
    }
    console.log(value);
  };

  // Correctly memoize the debounced function
  const debouncedSearch = useCallback(debounce(handleSearch, 1200), [
    handleSearch,
  ]);

  const handleTextToDebounce = (value) => {
    debouncedSearch(value);
  };

  const { current, location } = weather;

  useEffect(() => {
    fetchMyWeatherData();
  });

  const fetchMyWeatherData = async () => {
    fetchWeatherForeCast({
      cityName: "Islamabad",
      days: 7,
    }).then((data) => setWeather(data));
  };

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <SafeAreaView className="bg-black h-full p-5 text-white flex flex-1">
        <View style={{ height: "7%" }} className="mx-4 relative z-50">
          <View
            className="flex-row justify-end  items-center rounded-full"
            style={{
              backgroundColor: showSearch
                ? "rgba(255, 255, 255, 0.15)"
                : "transparent",
            }}
          >
            {showSearch ? (
              <TextInput
                onChangeText={handleTextToDebounce}
                placeholder="Search city"
                placeholderTextColor="lightgray"
                className="pl-6 h-10 flex-1 text-base text-white"
              />
            ) : null}

            <TouchableOpacity
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "white",
              }}
              className="rounded-full p-3 m-1"
              onPress={() => toggleSearch(!showSearch)}
            >
              <MagnifyingGlassIcon size="25" color="white" />
            </TouchableOpacity>
          </View>

          {locations.length > 0 && showSearch ? (
            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
              {locations.map((loc, Index) => {
                let showBorder = Index + 1 != locations.length;
                let borderClass = showBorder
                  ? `border-b-2 border-b-grey-400`
                  : "";

                return (
                  <TouchableOpacity
                    key={Index}
                    onPress={() => handleLocation(loc)}
                    className={
                      "flex-row items-center border-0 p-3 px-4 mb-1 " +
                      borderClass
                    }
                  >
                    <Text className="text-black text-lg ml-2">
                      {loc?.name}, {loc?.country}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>

        <Text className=" text-white text-2xl text-center my-5">
          {location?.name}, {location?.country}
        </Text>
        {/* <Text className=" text-white ">HomeScreen</Text> */}
        <View className="flex-row justify-center">
          <Image
            source={weatherImages[current?.condition.text]}
            className="w-40 h-40"
          />
        </View>

        <View className="space-y-2 my-5">
          <Text className="text-center font-bold text-white text-6xl ml-5 mx-2">
            {current?.temp_c} &#176;C
          </Text>

          <Text className="text-center font-bold text-white text-xl ml-5 my-3">
            {current?.condition?.text}
          </Text>
        </View>

        <View className="flex-row justify-between mx-4">
          <View className="flex-row space-x-2 items-center">
            <Image
              source={require("../assets/icons/wind.png")}
              className="w-6 h-6"
            />

            <Text className="text-white font-semibold text-base">
              {current?.wind_kph}km
            </Text>
          </View>

          <View className="flex-row space-x-2 items-center">
            <Image
              source={require("../assets/icons/drop.png")}
              className="w-6 h-6"
            />

            <Text className="text-white font-semibold text-base">
              {current?.humidity}%
            </Text>
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
            {weather?.forecast?.forecastday?.map((item, index) => (
              <View
                key={index}
                className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              >
                <Image
                  source={weatherImages[item?.day?.condition?.text]}
                  className="h-11 w-11"
                />

                <Text className="text-white">{item.date}</Text>
                <Text className="text-white font-semibold text-xl">
                  {item?.day?.avgtemp_c} &#176;
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
