/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
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
        "icon": string;
        "text": string;
        "type": string;
    }
    interface KizunaCheckbox {
        "checked": boolean;
        "classes": { [key: string]: any };
        "disabled": boolean;
        "name": string;
        "value": string;
    }
    interface KizunaPopover {
        "buttonText": string;
        "darkmode": boolean;
    }
    interface KizunaTabs {
        "classes": { [key: string]: string };
        "darkmode": boolean;
        "disabled": boolean;
        "menus": Array<{ [key: string]: string }>;
        "name": string;
        "onClick": Function;
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
    interface HTMLKizunaCheckboxElement extends Components.KizunaCheckbox, HTMLStencilElement {
    }
    var HTMLKizunaCheckboxElement: {
        prototype: HTMLKizunaCheckboxElement;
        new (): HTMLKizunaCheckboxElement;
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
        "kizuna-avatar": HTMLKizunaAvatarElement;
        "kizuna-button": HTMLKizunaButtonElement;
        "kizuna-checkbox": HTMLKizunaCheckboxElement;
        "kizuna-popover": HTMLKizunaPopoverElement;
        "kizuna-tabs": HTMLKizunaTabsElement;
        "kizuna-textbox": HTMLKizunaTextboxElement;
        "kizuna-toggle-button": HTMLKizunaToggleButtonElement;
    }
}
declare namespace LocalJSX {
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
        "icon"?: string;
        "text"?: string;
        "type"?: string;
    }
    interface KizunaCheckbox {
        "checked"?: boolean;
        "classes"?: { [key: string]: any };
        "disabled"?: boolean;
        "name"?: string;
        "value"?: string;
    }
    interface KizunaPopover {
        "buttonText"?: string;
        "darkmode"?: boolean;
    }
    interface KizunaTabs {
        "classes"?: { [key: string]: string };
        "darkmode"?: boolean;
        "disabled"?: boolean;
        "menus"?: Array<{ [key: string]: string }>;
        "name"?: string;
        "onClick"?: Function;
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
        "kizuna-avatar": KizunaAvatar;
        "kizuna-button": KizunaButton;
        "kizuna-checkbox": KizunaCheckbox;
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
            "kizuna-avatar": LocalJSX.KizunaAvatar & JSXBase.HTMLAttributes<HTMLKizunaAvatarElement>;
            "kizuna-button": LocalJSX.KizunaButton & JSXBase.HTMLAttributes<HTMLKizunaButtonElement>;
            "kizuna-checkbox": LocalJSX.KizunaCheckbox & JSXBase.HTMLAttributes<HTMLKizunaCheckboxElement>;
            "kizuna-popover": LocalJSX.KizunaPopover & JSXBase.HTMLAttributes<HTMLKizunaPopoverElement>;
            "kizuna-tabs": LocalJSX.KizunaTabs & JSXBase.HTMLAttributes<HTMLKizunaTabsElement>;
            "kizuna-textbox": LocalJSX.KizunaTextbox & JSXBase.HTMLAttributes<HTMLKizunaTextboxElement>;
            "kizuna-toggle-button": LocalJSX.KizunaToggleButton & JSXBase.HTMLAttributes<HTMLKizunaToggleButtonElement>;
        }
    }
}
