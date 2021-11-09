import { arrImg } from '../assets';

export const randomImg = () => {
  const randomNumber = Math.floor(Math.random() * arrImg.length);

  return arrImg[randomNumber];
};