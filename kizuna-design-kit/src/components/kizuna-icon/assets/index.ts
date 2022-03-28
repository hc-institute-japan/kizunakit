import search from './search.svg';
import settings from './settings.svg';
import emoticon from './emoticon.svg';
import calendar from './calendar.svg';
import trash from './trash.svg';
import circle from './circle.svg';

const icons = {
  search,
  settings,
  emoticon,
  calendar,
  trash,
  circle,
};

export function getIcon(name) {
  return icons[name];
}
