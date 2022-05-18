import { createNewTodoItem } from './todo.js';
import { registration } from './registration.js';
import { modal } from './modal.js';
import { songs } from './playlist.js';
import { circleList } from './trafficlights.js';

document
  .getElementById('js-registration-form')
  .addEventListener('submit', registration);
const toggleRegistrationButtons = document.getElementsByClassName(
  'js-toggle-registration-modal'
);

for (const item of toggleRegistrationButtons) {
  item.addEventListener('click', modal);
}
