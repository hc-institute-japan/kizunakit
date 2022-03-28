/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { CalendarEntry } from "./util/calendar-entry";
export namespace Components {
    interface KizunaApp {
    }
    interface KizunaAvatar {
        "classes": { [key: string]: any };
        "image": string;
        "indicator": boolean;
        "name": string;
        "rounded": string;
        "size": string;
        "status": string;
        "toolkit": string;
    }
    interface KizunaButton {
        "classes": { [key: string]: any };
        "disabled": boolean;
        "handleOnClick": Function;
        "icon": Element;
        "text": string;
        "type": string;
    }
    interface KizunaCalendar {
        "dayNames": string[];
        "monthNames": string[];
        "onChange": Function;
        "position": string;
        "showFillDays": boolean;
    }
    interface KizunaCheckbox {
        "checked": boolean;
        "classes": { [key: string]: any };
        "disabled": boolean;
        "name": string;
        "value": string;
    }
    interface KizunaIcon {
        "classes": { [key: string]: any };
        "name": string;
        "size": string;
    }
    interface KizunaListItem {
        "classes": { [key: string]: any };
        "disabled": boolean;
        "handleOnClick": Function;
        "icon": Element;
        "text": string;
        "type": string;
    }
    interface KizunaPopover {
        "buttonText": string;
        "darkmode": boolean;
        "itemList": Array<{ [key: string]: any }>;
        "position": string;
    }
    interface KizunaTabs {
        "classes": { [key: string]: string };
        "darkmode": boolean;
        "disabled": boolean;
        "menus": Array<{ [key: string]: string }>;
        "name": string;
        "onClick": any;
        "value": string;
    }
    interface KizunaTextbox {
        "classes": { [key: string]: any };
        "icon": string;
        "id": string;
        "isFocus": boolean;
        "label": string;
        "name": string;
        "placeholder": string;
        "value": string;
        "variant": string;
    }
    interface KizunaToggleButton {
        "checked": boolean;
        "classes": { [key: string]: any };
        "disabled": boolean;
    }
}
declare global {
    interface HTMLKizunaAppElement extends Components.KizunaApp, HTMLStencilElement {
    }
    var HTMLKizunaAppElement: {
        prototype: HTMLKizunaAppElement;
        new (): HTMLKizunaAppElement;
    };
    interface HTMLKizunaAvatarElement extends Components.KizunaAvatar, HTMLStencilElement {
    }
    var HTMLKizunaAvatarElement: {
        prototype: HTMLKizunaAvatarElement;
        new (): HTMLKizunaAvatarElement;
    };
    interface HTMLKizunaButtonElement extends Components.KizunaButton, HTMLStencilElement {
    }
    var HTMLKizunaButtonElement: {
        prototype: HTMLKizunaButtonElement;
        new (): HTMLKizunaButtonElement;
    };
    interface HTMLKizunaCalendarElement extends Components.KizunaCalendar, HTMLStencilElement {
    }
    var HTMLKizunaCalendarElement: {
        prototype: HTMLKizunaCalendarElement;
        new (): HTMLKizunaCalendarElement;
    };
    interface HTMLKizunaCheckboxElement extends Components.KizunaCheckbox, HTMLStencilElement {
    }
    var HTMLKizunaCheckboxElement: {
        prototype: HTMLKizunaCheckboxElement;
        new (): HTMLKizunaCheckboxElement;
    };
    interface HTMLKizunaIconElement extends Components.KizunaIcon, HTMLStencilElement {
    }
    var HTMLKizunaIconElement: {
        prototype: HTMLKizunaIconElement;
        new (): HTMLKizunaIconElement;
    };
    interface HTMLKizunaListItemElement extends Components.KizunaListItem, HTMLStencilElement {
    }
    var HTMLKizunaListItemElement: {
        prototype: HTMLKizunaListItemElement;
        new (): HTMLKizunaListItemElement;
    };
    interface HTMLKizunaPopoverElement extends Components.KizunaPopover, HTMLStencilElement {
    }
    var HTMLKizunaPopoverElement: {
        prototype: HTMLKizunaPopoverElement;
        new (): HTMLKizunaPopoverElement;
    };
    interface HTMLKizunaTabsElement extends Components.KizunaTabs, HTMLStencilElement {
    }
    var HTMLKizunaTabsElement: {
        prototype: HTMLKizunaTabsElement;
        new (): HTMLKizunaTabsElement;
    };
    interface HTMLKizunaTextboxElement extends Components.KizunaTextbox, HTMLStencilElement {
    }
    var HTMLKizunaTextboxElement: {
        prototype: HTMLKizunaTextboxElement;
        new (): HTMLKizunaTextboxElement;
    };
    interface HTMLKizunaToggleButtonElement extends Components.KizunaToggleButton, HTMLStencilElement {
    }
    var HTMLKizunaToggleButtonElement: {
        prototype: HTMLKizunaToggleButtonElement;
        new (): HTMLKizunaToggleButtonElement;
    };
    interface HTMLElementTagNameMap {
        "kizuna-app": HTMLKizunaAppElement;
        "kizuna-avatar": HTMLKizunaAvatarElement;
        "kizuna-button": HTMLKizunaButtonElement;
        "kizuna-calendar": HTMLKizunaCalendarElement;
        "kizuna-checkbox": HTMLKizunaCheckboxElement;
        "kizuna-icon": HTMLKizunaIconElement;
        "kizuna-list-item": HTMLKizunaListItemElement;
        "kizuna-popover": HTMLKizunaPopoverElement;
        "kizuna-tabs": HTMLKizunaTabsElement;
        "kizuna-textbox": HTMLKizunaTextboxElement;
        "kizuna-toggle-button": HTMLKizunaToggleButtonElement;
    }
}
declare namespace LocalJSX {
    interface KizunaApp {
    }
    interface KizunaAvatar {
        "classes"?: { [key: string]: any };
        "image"?: string;
        "indicator"?: boolean;
        "name"?: string;
        "rounded"?: string;
        "size"?: string;
        "status"?: string;
        "toolkit"?: string;
    }
    interface KizunaButton {
        "classes"?: { [key: string]: any };
        "disabled"?: boolean;
        "handleOnClick"?: Function;
        "icon"?: Element;
        "text"?: string;
        "type"?: string;
    }
    interface KizunaCalendar {
        "dayNames"?: string[];
        "monthNames"?: string[];
        "onChange"?: Function;
        "onDayChanged"?: (event: CustomEvent<CalendarEntry>) => void;
        "onMonthChanged"?: (event: CustomEvent<CalendarEntry>) => void;
        "position"?: string;
        "showFillDays"?: boolean;
    }
    interface KizunaCheckbox {
        "checked"?: boolean;
        "classes"?: { [key: string]: any };
        "disabled"?: boolean;
        "name"?: string;
        "value"?: string;
    }
    interface KizunaIcon {
        "classes"?: { [key: string]: any };
        "name"?: string;
        "size"?: string;
    }
    interface KizunaListItem {
        "classes"?: { [key: string]: any };
        "disabled"?: boolean;
        "handleOnClick"?: Function;
        "icon"?: Element;
        "text"?: string;
        "type"?: string;
    }
    interface KizunaPopover {
        "buttonText"?: string;
        "darkmode"?: boolean;
        "itemList"?: Array<{ [key: string]: any }>;
        "position"?: string;
    }
    interface KizunaTabs {
        "classes"?: { [key: string]: string };
        "darkmode"?: boolean;
        "disabled"?: boolean;
        "menus"?: Array<{ [key: string]: string }>;
        "name"?: string;
        "onClick"?: any;
        "value"?: string;
    }
    interface KizunaTextbox {
        "classes"?: { [key: string]: any };
        "icon"?: string;
        "id"?: string;
        "isFocus"?: boolean;
        "label"?: string;
        "name"?: string;
        "placeholder"?: string;
        "value"?: string;
        "variant"?: string;
    }
    interface KizunaToggleButton {
        "checked"?: boolean;
        "classes"?: { [key: string]: any };
        "disabled"?: boolean;
    }
    interface IntrinsicElements {
        "kizuna-app": KizunaApp;
        "kizuna-avatar": KizunaAvatar;
        "kizuna-button": KizunaButton;
        "kizuna-calendar": KizunaCalendar;
        "kizuna-checkbox": KizunaCheckbox;
        "kizuna-icon": KizunaIcon;
        "kizuna-list-item": KizunaListItem;
        "kizuna-popover": KizunaPopover;
        "kizuna-tabs": KizunaTabs;
        "kizuna-textbox": KizunaTextbox;
        "kizuna-toggle-button": KizunaToggleButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "kizuna-app": LocalJSX.KizunaApp & JSXBase.HTMLAttributes<HTMLKizunaAppElement>;
            "kizuna-avatar": LocalJSX.KizunaAvatar & JSXBase.HTMLAttributes<HTMLKizunaAvatarElement>;
            "kizuna-button": LocalJSX.KizunaButton & JSXBase.HTMLAttributes<HTMLKizunaButtonElement>;
            "kizuna-calendar": LocalJSX.KizunaCalendar & JSXBase.HTMLAttributes<HTMLKizunaCalendarElement>;
            "kizuna-checkbox": LocalJSX.KizunaCheckbox & JSXBase.HTMLAttributes<HTMLKizunaCheckboxElement>;
            "kizuna-icon": LocalJSX.KizunaIcon & JSXBase.HTMLAttributes<HTMLKizunaIconElement>;
            "kizuna-list-item": LocalJSX.KizunaListItem & JSXBase.HTMLAttributes<HTMLKizunaListItemElement>;
            "kizuna-popover": LocalJSX.KizunaPopover & JSXBase.HTMLAttributes<HTMLKizunaPopoverElement>;
            "kizuna-tabs": LocalJSX.KizunaTabs & JSXBase.HTMLAttributes<HTMLKizunaTabsElement>;
            "kizuna-textbox": LocalJSX.KizunaTextbox & JSXBase.HTMLAttributes<HTMLKizunaTextboxElement>;
            "kizuna-toggle-button": LocalJSX.KizunaToggleButton & JSXBase.HTMLAttributes<HTMLKizunaToggleButtonElement>;
        }
    }
}
