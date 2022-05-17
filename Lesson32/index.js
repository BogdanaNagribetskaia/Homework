import { registration } from './registration.js';
// import { todo } from './todo.js';
import { modal } from './modal.js';
// import { playlist } from './playlist.js';

document
  .getElementById('js-registration-form')
  .addEventListener('submit', registration);
const toggleRegistrationButtons = document.getElementsByClassName(
  'js-toggle-registration-modal'
);

for (const item of toggleRegistrationButtons) {
  item.addEventListener('click', modal);
}
