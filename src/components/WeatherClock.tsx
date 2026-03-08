import { useState, useEffect } from "react";
import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning, CloudDrizzle, Droplets, Wind, Clock } from "lucide-react";

interface WeatherData {
  temp: number;
  weatherCode: number;
  humidity: number;
  windSpeed: number;
}

const weatherIcons: Record<number, React.ElementType> = {
  0: Sun, 1: Sun, 2: Cloud, 3: Cloud,
  45: Cloud, 48: Cloud,
  51: CloudDrizzle, 53: CloudDrizzle, 55: CloudDrizzle,
  61: CloudRain, 63: CloudRain, 65: CloudRain,
  71: CloudSnow, 73: CloudSnow, 75: CloudSnow,
  95: CloudLightning, 96: CloudLightning, 99: CloudLightning,
};

const getWeatherIcon = (code: number) => weatherIcons[code] || Cloud;

const WeatherClock = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Toshkent koordinatalari (default)
    const fetchWeather = async (lat = 41.2995, lon = 69.2401) => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m&timezone=Asia/Tashkent`
        );
        const data = await res.json();
        setWeather({
          temp: Math.round(data.current.temperature_2m),
          weatherCode: data.current.weather_code,
          humidity: data.current.relative_humidity_2m,
          windSpeed: Math.round(data.current.wind_speed_10m),
        });
      } catch (e) {
        console.error("Weather fetch failed:", e);
      }
    };

    // Try user location, fallback to Tashkent
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
        () => fetchWeather()
      );
    } else {
      fetchWeather();
    }

    // Refresh every 15 min
    const interval = setInterval(() => fetchWeather(), 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  const WeatherIcon = weather ? getWeatherIcon(weather.weatherCode) : Cloud;

  return (
    <div className="flex items-center gap-3 text-xs">
      {/* Clock */}
      <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-primary/10 text-primary font-mono font-semibold">
        <Clock className="w-3.5 h-3.5" />
        <span>{hours}:{minutes}</span>
        <span className="text-primary/50 text-[10px]">{seconds}</span>
      </div>

      {/* Weather */}
      {weather && (
        <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-secondary/10 text-secondary-foreground">
          <WeatherIcon className="w-4 h-4 text-secondary" />
          <span className="font-semibold">{weather.temp}°C</span>
          <div className="hidden sm:flex items-center gap-1.5 text-muted-foreground">
            <Droplets className="w-3 h-3" />
            <span>{weather.humidity}%</span>
            <Wind className="w-3 h-3 ml-1" />
            <span>{weather.windSpeed} km/h</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherClock;
