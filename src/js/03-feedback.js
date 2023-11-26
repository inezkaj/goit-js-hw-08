import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

if (localStorage.getItem(localStorageKey)) {
  let storageValues = JSON.parse(localStorage.getItem(localStorageKey));
  form.elements.message.value = storageValues.message ?? '';
  form.elements.email.value = storageValues.email ?? '';
}

form.addEventListener(
  'input',
  throttle(() => {
    let values = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(values));
  }, 500)
);

form.addEventListener('submit', ev => {
  ev.preventDefault();
  console.log(localStorage.getItem(localStorageKey));
  localStorage.removeItem(localStorageKey);
  form.reset();
});
