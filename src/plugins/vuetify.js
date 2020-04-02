import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelopeSquare,
  faPhoneSquareAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';

Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(
  faEnvelopeSquare,
  faPhoneSquareAlt,
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
  faFacebookSquare,
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
