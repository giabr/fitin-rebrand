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
);

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#5AC8D8',
        secondary: '#DDDFE2',
        tertiary: '#044852',
        accent: '#4977AF',
        background: '#EDEEF0',
      },
    },
  },
});
