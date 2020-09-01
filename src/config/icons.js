import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faLock,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

library.add(faLock);
library.add(faEyeSlash);
library.add(faEye);

Vue.component('font-awesome-icon', FontAwesomeIcon);
