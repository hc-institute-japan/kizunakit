import addcontact from './add-participant.svg';
import add from './add.svg';
import attach from './attach.svg';
import blocked from './blocked.svg';
import bold from './bold.svg';
import briefcase from './briefcase.svg';
import calendar from './calendar.svg';
import call from './call.svg';
import cameraoff from './camera-off.svg';
import camera from './camera.svg';
import caution from './caution.svg';
import chat from './chat.svg';
import check from './check.svg';
import circle from './circle.svg';
import close from './close.svg';
import contacts from './contacts.svg';
import copy from './copy.svg';
import create from './create.svg';
import dottedmenuhorizontal from './dotted-menu-horizontal.svg';
import dottedmenuvertical from './dotted-menu-vertical.svg';
import down from './down.svg';
import end from './end.svg';
import emoticon from './emoticon.svg';
import emptynotification from './empty-notification.svg';
import file from './file.svg';
import gif from './gif.svg';
import heart from './heart.svg';
import information from './information.svg';
import italic from './italic.svg';
import leftarrow from './left-arrow.svg';
import left from './left.svg';
import link from './link.svg';
import like from './like.svg';
import menu from './menu.svg';
import message from './message.svg';
import mic from './mic.svg';
import micoff from './mic-off.svg';
import pin from './pin.svg';
import pin2 from './pin2.svg';
import remove from './remove.svg';
import reply from './reply.svg';
import rightarrow from './right-arrow.svg';
import right from './right.svg';
import search from './search.svg';
import send from './send.svg';
import settings from './settings.svg';
import strikethrough from './strikethrough.svg';
import trash from './trash.svg';
import underline from './underline.svg';
import up from './up.svg';

const icons = {
  addcontact,
  add,
  attach,
  blocked,
  bold,
  briefcase,
  calendar,
  call,
  cameraoff,
  camera,
  caution,
  chat,
  check,
  circle,
  close,
  contacts,
  copy,
  create,
  dottedmenuhorizontal,
  dottedmenuvertical,
  down,
  emoticon,
  emptynotification,
  end,
  file,
  gif,
  heart,
  information,
  italic,
  left,
  leftarrow,
  link,
  like,
  menu,
  message,
  mic,
  micoff,
  pin,
  pin2,
  remove,
  reply,
  right,
  rightarrow,
  search,
  send,
  settings,
  strikethrough,
  trash,
  underline,
  up,
};

export function getIcon(name) {
  return icons[name];
}
