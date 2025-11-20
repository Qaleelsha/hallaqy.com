'use strict';

import {validateForm, saveFormValues} from "./modules/forms";
import initMap from "./modules/map";

document.addEventListener('DOMContentLoaded', () => {
    saveFormValues();
    validateForm('.contacts_main-form');
    initMap();
})