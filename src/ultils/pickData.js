import moment from 'moment';
import { iconUrl } from '../consts/api';

export const pickCurrentWeatherData = (data) => {
  return {
    time: moment(data[0].EpochTime * 1000).format('LT'),
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
  const maxUVIndex = dailyForecast.AirAndPollen.find(p => p.Name === 'UVIndex');
  return {
    sunRise: moment(dailyForecast.Sun.EpochRise * 1000).format('LT'),
    sunSet: moment(dailyForecast.Sun.EpochSet * 1000).format('LT'),
    moonRise: moment(dailyForecast.Moon.EpochSet * 1000).format('LT'),
    moonSet: moment(dailyForecast.Moon.EpochSet * 1000).format('LT'),
    dayForecast: {
      time: moment(dailyForecast.EpochDate * 1000).format('MM/DD'),
      maxUVIndex: `${maxUVIndex.Value} ${maxUVIndex.Category}`,
      weatherIcon: `${iconUrl}/${dailyForecast.Day.Icon}.svg`,
      weatherText: dailyForecast.Day.IconPhrase,
      realFeel: `${dailyForecast.RealFeelTemperature.Maximum.Value.toFixed()}°`,
      realFeelShade: `${dailyForecast.RealFeelTemperatureShade.Maximum.Value.toFixed()}°`,
      temperature: `${dailyForecast.Temperature.Maximum.Value.toFixed()}°${dailyForecast.Temperature.Maximum.Unit}`,
      thunderProbability: `${dailyForecast.Day.ThunderstormProbability}%`,
      rainProbability: `${dailyForecast.Day.RainProbability}%`,
      wind: `${dailyForecast.Day.Wind.Direction.Localized} ${dailyForecast.Day.Wind.Speed.Value.toFixed()} ${dailyForecast.Day.Wind.Speed.Unit}`,
      windGust: `${dailyForecast.Day.WindGust.Direction.Localized} ${dailyForecast.Day.WindGust.Speed.Value.toFixed()} ${dailyForecast.Day.WindGust.Speed.Unit}`,
      precipitation: `${dailyForecast.Day.TotalLiquid.Value} ${dailyForecast.Day.TotalLiquid.Unit}`,
      cloudCover: `${dailyForecast.Day.CloudCover}%`,
    },
    nightForecast: {
      time: moment(dailyForecast.EpochDate * 1000).format('MM/DD'),
      weatherIcon: `${iconUrl}/${dailyForecast.Night.Icon}.svg`,
      weatherText: dailyForecast.Night.IconPhrase,
      realFeel: `${dailyForecast.RealFeelTemperature.Minimum.Value.toFixed()}°`,
      realFeelShade: `${dailyForecast.RealFeelTemperatureShade.Minimum.Value.toFixed()}°`,
      temperature: `${dailyForecast.Temperature.Minimum.Value.toFixed()}°${dailyForecast.Temperature.Minimum.Unit}`,
      thunderProbability: `${dailyForecast.Night.ThunderstormProbability}%`,
      rainProbability: `${dailyForecast.Night.RainProbability}%`,
      wind: `${dailyForecast.Night.Wind.Direction.Localized} ${dailyForecast.Night.Wind.Speed.Value.toFixed()} ${dailyForecast.Night.Wind.Speed.Unit}`,
      windGust: `${dailyForecast.Night.WindGust.Direction.Localized} ${dailyForecast.Night.WindGust.Speed.Value.toFixed()} ${dailyForecast.Night.WindGust.Speed.Unit}`,
      precipitation: `${dailyForecast.Night.TotalLiquid.Value} ${dailyForecast.Night.TotalLiquid.Unit}`,
      cloudCover: `${dailyForecast.Night.CloudCover}%`,
    },
  };
};