import moment from 'moment';
import { iconUrl } from '../consts/api';

export const pickCurrentWeatherData = (data) => {
  return {
    currentTime: moment(data[0].EpochTime * 1000).format('LT'),
    temperature: {
      metric: `${data[0].Temperature.Metric.Value.toFixed()}°${data[0].Temperature.Metric.Unit}`,
      imperial: `${data[0].Temperature.Imperial.Value.toFixed()}°${data[0].Temperature.Imperial.Unit}`,
    },
    realFeel: {
      metric: `${data[0].RealFeelTemperature.Metric.Value.toFixed()}°`,
      imperial: `${data[0].RealFeelTemperature.Imperial.Value.toFixed()}°`,
    },
    realFeelShade: {
      metric: `${data[0].RealFeelTemperatureShade.Metric.Value.toFixed()}°`,
      imperial: `${data[0].RealFeelTemperatureShade.Imperial.Value.toFixed()}°`,
    },
    weatherText: data[0].WeatherText,
    weatherIcon: `${iconUrl}/${data[0].WeatherIcon}.svg`,
    maxUVIndex: `${data[0].UVIndex} ${data[0].UVIndexText}`,
    wind: {
      metric: `${data[0].Wind.Speed.Metric.Value.toFixed()} ${data[0].Wind.Speed.Metric.Unit}`,
      imperial: `${data[0].Wind.Speed.Imperial.Value.toFixed()} ${data[0].Wind.Speed.Imperial.Unit}`,
    },
    windGust: {
      metric: `${data[0].WindGust.Speed.Metric.Value.toFixed()} ${data[0].WindGust.Speed.Metric.Unit}`,
      imperial: `${data[0].WindGust.Speed.Imperial.Value.toFixed()} ${data[0].WindGust.Speed.Imperial.Unit}`,
    },
    humidity: `${data[0].RelativeHumidity}%`,
    indoorHumidity: `${data[0].IndoorRelativeHumidity}%`,
    dewPoint: {
      metric: `${data[0].DewPoint.Metric.Value.toFixed()}°${data[0].DewPoint.Metric.Unit}`,
      imperial: `${data[0].DewPoint.Imperial.Value.toFixed()}°${data[0].DewPoint.Imperial.Unit}`,
    },
    pressure: {
      metric: `${data[0].Pressure.Metric.Value.toFixed()} ${data[0].Pressure.Metric.Unit}`,
      imperial: `${data[0].Pressure.Imperial.Value.toFixed()} ${data[0].Pressure.Imperial.Unit}`,
    },
    cloudCover: `${data[0].CloudCover}%`,
    visibility: {
      metric: `${data[0].Visibility.Metric.Value.toFixed()} ${data[0].Visibility.Metric.Unit}`,
      imperial: `${data[0].Visibility.Imperial.Value.toFixed()} ${data[0].Visibility.Imperial.Unit}`,
    },
    cloudCeiling: {
      metric: `${data[0].Ceiling.Metric.Value.toFixed()} ${data[0].Ceiling.Metric.Unit}`,
      imperial: `${data[0].Ceiling.Imperial.Value.toFixed()} ${data[0].Ceiling.Imperial.Unit}`,
    },
  };
};

export const pickOneDayForecastData = (data) => {
  const dailyForecast = data.DailyForecasts[0];
  return {
    date: moment(dailyForecast.EpochDate * 1000).format('MM/DD'),
    sunRise: moment(dailyForecast.Sun.EpochRise * 1000).format('LT'),
    sunSet: moment(dailyForecast.Sun.EpochSet * 1000).format('LT'),
    moonRise: moment(dailyForecast.Moon.EpochSet * 1000).format('LT'),
    moonSet: moment(dailyForecast.Moon.EpochSet * 1000).format('LT'),
    temperature: {
      min: { value: (dailyForecast.Temperature.Minimum.Value).toFixed(), unit: dailyForecast.Temperature.Minimum.Unit },
      max: { value: (dailyForecast.Temperature.Maximum.Value).toFixed(), unit: dailyForecast.Temperature.Maximum.Unit }
    },
    realFeel: {
      min: { value: (dailyForecast.RealFeelTemperature.Minimum.Value).toFixed(), unit: dailyForecast.RealFeelTemperature.Minimum.Unit },
      max: { value: (dailyForecast.RealFeelTemperature.Maximum.Value).toFixed(), unit: dailyForecast.RealFeelTemperature.Maximum.Unit },
    },
    realFeelShade: {
      min: { value: (dailyForecast.RealFeelTemperatureShade.Minimum.Value).toFixed(), unit: dailyForecast.RealFeelTemperatureShade.Minimum.Unit },
      max: { value: (dailyForecast.RealFeelTemperatureShade.Maximum.Value).toFixed(), unit: dailyForecast.RealFeelTemperatureShade.Maximum.Unit },
    },
    dayForecast: {
      weatherIcon: `${iconUrl}/${dailyForecast.Day.Icon}.svg`,
      weatherText: dailyForecast.Day.IconPhrase,
      thunderProbability: dailyForecast.Day.ThunderstormProbability,
      rainProbability: dailyForecast.Day.RainProbability,
      wind: {
        direction: { localized: dailyForecast.Day.Wind.Direction.Localized, english: dailyForecast.Day.Wind.Direction.English },
        speed: { value: (dailyForecast.Day.Wind.Speed.Value).toFixed(), unit: dailyForecast.Day.Wind.Speed.Unit },
      },
      windGust: {
        direction: { localized: dailyForecast.Day.WindGust.Direction.Localized, english: dailyForecast.Day.WindGust.Direction.English },
        speed: { value: (dailyForecast.Day.WindGust.Speed.Value).toFixed(), unit: dailyForecast.Day.WindGust.Speed.Unit },
      },
      precipitation: { value: dailyForecast.Day.TotalLiquid.Value, unit: dailyForecast.Day.TotalLiquid.Unit },
      cloudCover: dailyForecast.Day.CloudCover,
    },
    nightForecast: {
      weatherIcon: `${iconUrl}/${dailyForecast.Night.Icon}.svg`,
      weatherText: dailyForecast.Night.IconPhrase,
      thunderProbability: dailyForecast.Night.ThunderstormProbability,
      rainProbability: dailyForecast.Night.RainProbability,
      wind: {
        direction: { localized: dailyForecast.Night.Wind.Direction.Localized, english: dailyForecast.Night.Wind.Direction.English },
        speed: { value: (dailyForecast.Night.Wind.Speed.Value).toFixed(), unit: dailyForecast.Night.Wind.Speed.Unit },
      },
      windGust: {
        direction: { localized: dailyForecast.Night.WindGust.Direction.Localized, english: dailyForecast.Night.WindGust.Direction.English },
        speed: { value: (dailyForecast.Night.WindGust.Speed.Value).toFixed(), unit: dailyForecast.Night.WindGust.Speed.Unit },
      },
      precipitation: { value: dailyForecast.Night.TotalLiquid.Value, unit: dailyForecast.Night.TotalLiquid.Unit },
      cloudCover: dailyForecast.Night.CloudCover,
    },
  };
};