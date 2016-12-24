import $ from 'jquery';
import 'particles.js';
import 'lightbox2/dist/css/lightbox.min.css';
import 'sanitize.css/sanitize.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Lightbox from 'lightbox2';
import partclesSetting from './particles.setting';
import '../css/app.pcss';

class App {
  constructor() {
    this.initializeLightbox();
    this.initializeParticlesJs();
    const $body = $('body');
    const $loading = $('.loading');
    $loading.on('click', () => {
      $body.attr('data-loading', 'loaded');
      this.initializeAos();
    });
  }

  initializeAos() {
    Aos.init({
      delay: 100,
      duration: 1000,
      easing: 'ease-out-sine'
    });
  }

  initializeLightbox() {
    Lightbox.option({
      fadeDuration: 200,
      imageFadeDuration: 200,
      resizeDuration: 200
    });
  }

  initializeParticlesJs() {
    const { particlesJS } = window;
    if (particlesJS != null) {
      particlesJS('particles', partclesSetting);
    }
  }
}

new App();
