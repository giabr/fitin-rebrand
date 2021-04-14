import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faPhoneSquareAlt,
  faBars,
  faDonate,
  faGifts,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(
  faEnvelope,
  faPhoneSquareAlt,
  faInstagram,
  faBars,
  faLinkedin,
  faTwitter,
  faFacebook,
  faDonate,
  faGifts,
  faHeart,
);

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#044851',
        secondary: '#628D93',
        tertiary: '#96BBC1',
        quaternary: '#B7D4DA',
        accent: '#4977AF',
        background: '#EDEEF0',
      },
    },
  },
});
