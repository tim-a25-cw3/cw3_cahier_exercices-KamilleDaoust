import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();

    this.initSwiperResponsive();
  }
  initSwiperResponsive() {
    const swiper = new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination',
        spaceBetween: 50, 

     
      
      },
    });
  }
}
new Main();
