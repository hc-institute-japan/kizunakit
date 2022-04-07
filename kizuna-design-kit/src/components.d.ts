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
    }
    interface KizunaBadge {
        "classes": { [key: string]: any };
        "darkmode": boolean;
        "icon": string;
        "text": string;
    }
    interface KizunaButton {
        "classes": { [key: string]: any };
        "disabled": boolean;
        "handleOnClick": Function;
        "icon": string;
        "rounded": boolean;
        "text": string;
        "type": string;
    }
    interface KizunaCalendar {
        "classes": { [key: string]: any };
        "darkmode": boolean;
        "dayNames": string[];
        "id": string;
        "monthNames": string[];
        "onChange": Function;
        "position": string;
        "value": string;
    }
    interface KizunaCheckbox {
        "checked": boolean;
        "classes": { [key: string]: any };
        "disabled": boolean;
        "name": string;
        "rounded": boolean;
        "value": string;
    }
    interface KizunaDivider {
        "classes": { [key: string]: any };
    }
    interface KizunaIcon {
        "classes": { [key: string]: any };
        "name": string;
        "size": string;
    }
    interface KizunaListItem {
        "classes": { [key: string]: any };
        "divider": boolean;
        "handleOnClick": Function;
        "icon": string;
        "text": string;
    }
    interface KizunaMessageBox {
        "classes": { [key: string]: any };
        "darkmode": boolean;
        "message": string;
        "messageStatus": string;
        "reactionList": Array<{ [key: string]: any }>;
        "sent": boolean;
        "time": string;
    }
    interface KizunaMessageReact {
        "classes": { [key: string]: any };
        "count": Number;
        "darkmode": boolean;
        "emoji": string;
    }
    interface KizunaModal {
        "classes": { [key: string]: any };
        "closeIcon": string;
        "onClose": Function;
        "open": any;
        "transparent": boolean;
    }
    interface KizunaPopover {
        "classes": { [key: string]: any };
        "darkmode": boolean;
        "id": string;
        "open": boolean;
        "position": string;
    }
    interface KizunaTabs {
        "classes": { [key: string]: string };
        "darkmode": boolean;
        "menus": Array<{ [key: string]: string }>;
        "value": string;
    }
    interface KizunaTextEditor {
        "darkmode": boolean;
        "onChange": Function;
        "open": boolean;
        "position": string;
        "selected": string;
    }
    interface KizunaTextbox {
        "align": string;
        "classes": { [key: string]: any };
        "emoticon": boolean;
        "icon": string;
        "id": string;
        "isFocus": boolean;
        "label": string;
        "name": string;
        "onChange": Function;
        "onEmoticonClick": Function;
        "placeholder": string;
        "rounded": boolean;
        "startIconName": string;
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
    interface HTMLKizunaBadgeElement extends Components.KizunaBadge, HTMLStencilElement {
    }
    var HTMLKizunaBadgeElement: {
        prototype: HTMLKizunaBadgeElement;
        new (): HTMLKizunaBadgeElement;
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
    interface HTMLKizunaDividerElement extends Components.KizunaDivider, HTMLStencilElement {
    }
    var HTMLKizunaDividerElement: {
        prototype: HTMLKizunaDividerElement;
        new (): HTMLKizunaDividerElement;
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
    interface HTMLKizunaMessageBoxElement extends Components.KizunaMessageBox, HTMLStencilElement {
    }
    var HTMLKizunaMessageBoxElement: {
        prototype: HTMLKizunaMessageBoxElement;
        new (): HTMLKizunaMessageBoxElement;
    };
    interface HTMLKizunaMessageReactElement extends Components.KizunaMessageReact, HTMLStencilElement {
    }
    var HTMLKizunaMessageReactElement: {
        prototype: HTMLKizunaMessageReactElement;
        new (): HTMLKizunaMessageReactElement;
    };
    interface HTMLKizunaModalElement extends Components.KizunaModal, HTMLStencilElement {
    }
    var HTMLKizunaModalElement: {
        prototype: HTMLKizunaModalElement;
        new (): HTMLKizunaModalElement;
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
    interface HTMLKizunaTextEditorElement extends Components.KizunaTextEditor, HTMLStencilElement {
    }
    var HTMLKizunaTextEditorElement: {
        prototype: HTMLKizunaTextEditorElement;
        new (): HTMLKizunaTextEditorElement;
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
        "kizuna-badge": HTMLKizunaBadgeElement;
        "kizuna-button": HTMLKizunaButtonElement;
        "kizuna-calendar": HTMLKizunaCalendarElement;
        "kizuna-checkbox": HTMLKizunaCheckboxElement;
        "kizuna-divider": HTMLKizunaDividerElement;
        "kizuna-icon": HTMLKizunaIconElement;
        "kizuna-list-item": HTMLKizunaListItemElement;
        "kizuna-message-box": HTMLKizunaMessageBoxElement;
        "kizuna-message-react": HTMLKizunaMessageReactElement;
        "kizuna-modal": HTMLKizunaModalElement;
        "kizuna-popover": HTMLKizunaPopoverElement;
        "kizuna-tabs": HTMLKizunaTabsElement;
        "kizuna-text-editor": HTMLKizunaTextEditorElement;
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
    }
    interface KizunaBadge {
        "classes"?: { [key: string]: any };
        "darkmode"?: boolean;
        "icon"?: string;
        "text"?: string;
    }
    interface KizunaButton {
        "classes"?: { [key: string]: any };
        "disabled"?: boolean;
        "handleOnClick"?: Function;
        "icon"?: string;
        "rounded"?: boolean;
        "text"?: string;
        "type"?: string;
    }
    interface KizunaCalendar {
        "classes"?: { [key: string]: any };
        "darkmode"?: boolean;
        "dayNames"?: string[];
        "id"?: string;
        "monthNames"?: string[];
        "onChange"?: Function;
        "onDayChanged"?: (event: CustomEvent<CalendarEntry>) => void;
        "onMonthChanged"?: (event: CustomEvent<CalendarEntry>) => void;
        "position"?: string;
        "value"?: string;
    }
    interface KizunaCheckbox {
        "checked"?: boolean;
        "classes"?: { [key: string]: any };
        "disabled"?: boolean;
        "name"?: string;
        "rounded"?: boolean;
        "value"?: string;
    }
    interface KizunaDivider {
        "classes"?: { [key: string]: any };
    }
    interface KizunaIcon {
        "classes"?: { [key: string]: any };
        "name"?: string;
        "size"?: string;
    }
    interface KizunaListItem {
        "classes"?: { [key: string]: any };
        "divider"?: boolean;
        "handleOnClick"?: Function;
        "icon"?: string;
        "text"?: string;
    }
    interface KizunaMessageBox {
        "classes"?: { [key: string]: any };
        "darkmode"?: boolean;
        "message"?: string;
        "messageStatus"?: string;
        "reactionList"?: Array<{ [key: string]: any }>;
        "sent"?: boolean;
        "time"?: string;
    }
    interface KizunaMessageReact {
        "classes"?: { [key: string]: any };
        "count"?: Number;
        "darkmode"?: boolean;
        "emoji"?: string;
    }
    interface KizunaModal {
        "classes"?: { [key: string]: any };
        "closeIcon"?: string;
        "onClose"?: Function;
        "open"?: any;
        "transparent"?: boolean;
    }
    interface KizunaPopover {
        "classes"?: { [key: string]: any };
        "darkmode"?: boolean;
        "id"?: string;
        "open"?: boolean;
        "position"?: string;
    }
    interface KizunaTabs {
        "classes"?: { [key: string]: string };
        "darkmode"?: boolean;
        "menus"?: Array<{ [key: string]: string }>;
        "onHandleClick"?: (event: CustomEvent<string>) => void;
        "value"?: string;
    }
    interface KizunaTextEditor {
        "darkmode"?: boolean;
        "onChange"?: Function;
        "open"?: boolean;
        "position"?: string;
        "selected"?: string;
    }
    interface KizunaTextbox {
        "align"?: string;
        "classes"?: { [key: string]: any };
        "emoticon"?: boolean;
        "icon"?: string;
        "id"?: string;
        "isFocus"?: boolean;
        "label"?: string;
        "name"?: string;
        "onChange"?: Function;
        "onEmoticonClick"?: Function;
        "placeholder"?: string;
        "rounded"?: boolean;
        "startIconName"?: string;
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
        "kizuna-badge": KizunaBadge;
        "kizuna-button": KizunaButton;
        "kizuna-calendar": KizunaCalendar;
        "kizuna-checkbox": KizunaCheckbox;
        "kizuna-divider": KizunaDivider;
        "kizuna-icon": KizunaIcon;
        "kizuna-list-item": KizunaListItem;
        "kizuna-message-box": KizunaMessageBox;
        "kizuna-message-react": KizunaMessageReact;
        "kizuna-modal": KizunaModal;
        "kizuna-popover": KizunaPopover;
        "kizuna-tabs": KizunaTabs;
        "kizuna-text-editor": KizunaTextEditor;
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
            "kizuna-badge": LocalJSX.KizunaBadge & JSXBase.HTMLAttributes<HTMLKizunaBadgeElement>;
            "kizuna-button": LocalJSX.KizunaButton & JSXBase.HTMLAttributes<HTMLKizunaButtonElement>;
            "kizuna-calendar": LocalJSX.KizunaCalendar & JSXBase.HTMLAttributes<HTMLKizunaCalendarElement>;
            "kizuna-checkbox": LocalJSX.KizunaCheckbox & JSXBase.HTMLAttributes<HTMLKizunaCheckboxElement>;
            "kizuna-divider": LocalJSX.KizunaDivider & JSXBase.HTMLAttributes<HTMLKizunaDividerElement>;
            "kizuna-icon": LocalJSX.KizunaIcon & JSXBase.HTMLAttributes<HTMLKizunaIconElement>;
            "kizuna-list-item": LocalJSX.KizunaListItem & JSXBase.HTMLAttributes<HTMLKizunaListItemElement>;
            "kizuna-message-box": LocalJSX.KizunaMessageBox & JSXBase.HTMLAttributes<HTMLKizunaMessageBoxElement>;
            "kizuna-message-react": LocalJSX.KizunaMessageReact & JSXBase.HTMLAttributes<HTMLKizunaMessageReactElement>;
            "kizuna-modal": LocalJSX.KizunaModal & JSXBase.HTMLAttributes<HTMLKizunaModalElement>;
            "kizuna-popover": LocalJSX.KizunaPopover & JSXBase.HTMLAttributes<HTMLKizunaPopoverElement>;
            "kizuna-tabs": LocalJSX.KizunaTabs & JSXBase.HTMLAttributes<HTMLKizunaTabsElement>;
            "kizuna-text-editor": LocalJSX.KizunaTextEditor & JSXBase.HTMLAttributes<HTMLKizunaTextEditorElement>;
            "kizuna-textbox": LocalJSX.KizunaTextbox & JSXBase.HTMLAttributes<HTMLKizunaTextboxElement>;
            "kizuna-toggle-button": LocalJSX.KizunaToggleButton & JSXBase.HTMLAttributes<HTMLKizunaToggleButtonElement>;
        }
    }
}
