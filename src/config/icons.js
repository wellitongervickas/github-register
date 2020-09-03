import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faLock,
  faEye,
  faCheck,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

library.add(faLock);
library.add(faEyeSlash);
library.add(faEye);
library.add(faCheck);

Vue.component('font-awesome-icon', FontAwesomeIcon);
