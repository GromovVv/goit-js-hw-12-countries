import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/Angeler.css';
import { defaults } from '@pnotify/core';
import { error, alert} from '@pnotify/core';

defaults.styling = 'angeler';
defaults.icons = 'angeler';

function errorFetch() {
  error({
    title: 'Шеф, всё пропало!',
    text: `Такой страны не существует!`,
    delay: 2000,
  });
}

function errorQuerySpecific() {
  error({
    title: 'Найдено слишком много совпадений!',
    text: 'Пожалуйста уточните запрос',
    delay: 2000,
  });
}
function successQuery() {
  alert({
    title: 'Це перемога! 🙂',
    delay: 2000,
  });
}

function successQueryList() {
  alert({
    title: 'Це перемога! 🙂',
    text: `Список стран соответствующих Вашему запросу`,
    delay: 2000,
  });
}

export { errorFetch, errorQuerySpecific, successQuery, successQueryList };