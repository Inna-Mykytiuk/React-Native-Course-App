import React, { useState, useEffect } from 'react';

import * as Location from 'expo-location';
// import { WEATHER_KEY_API } from '@env';
// import Constants from 'expo-constants';
// const TEST_KEY = Constants.manifest.extra.TEST_KEY;

const WEATHER_KEY_API = 'ba8034abc9198c83a40bc190cd65d921';

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  // const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);

  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY_API}&units=metric`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError('Could not load weather data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      await fetchWeatherData();
    })();
  }, [lat, lon]);
  return [loading, error, weather];
};
