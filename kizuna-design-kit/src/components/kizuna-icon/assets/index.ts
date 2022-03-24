import search from './search.svg';
import settings from './settings.svg';

const icons = {
  search,
  settings,
};

export function getIcon(name) {
  return icons[name];
}
