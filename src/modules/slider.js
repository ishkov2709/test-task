import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules/index.mjs';
import '../../node_modules/swiper/swiper.css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Autoplay],
  loop: true,
  autoplay: {
    delay: 5000,
  },
});
