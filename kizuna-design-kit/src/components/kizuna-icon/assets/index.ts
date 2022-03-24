import search from './search.svg';
import settings from './settings.svg';
import emoticon from './emoticon.svg';
import calendar from './calendar.svg';
import trash from './trash.svg';

const icons = {
  search,
  settings,
  emoticon,
  calendar,
  trash,
};

export function getIcon(name) {
  return icons[name];
}
