import {widthPercentageToDP as wp, 
  heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const COLORS = {

  primary: '#FF4500',
  secondary: '#dbe2eb',
  white: '#FFFFFF'

}

export const SIZES = {

  base: 12,
  font: 14,
  radius: 30,
  radius2: 8,
  padding: 10,
  padding2: 12,

  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,

  wp,
  hp

}

const img = 'https://27games.net/wp-content/uploads/2019/11/Descargar-CALL-OF-DUTY-MOBILE-Gratis-Full-Espa%C3%B1ol-PC.jpg';
const previous = require('../assets/previous.png');

const theme = { COLORS, SIZES, img, previous};

export default theme;