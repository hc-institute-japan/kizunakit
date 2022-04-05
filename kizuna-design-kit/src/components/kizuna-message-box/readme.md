# kizuna-message-box



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type                        | Default     |
| --------------- | ---------------- | ----------- | --------------------------- | ----------- |
| `classes`       | --               |             | `{ [key: string]: any; }`   | `undefined` |
| `darkmode`      | `darkmode`       |             | `boolean`                   | `undefined` |
| `message`       | `message`        |             | `string`                    | `undefined` |
| `messageStatus` | `message-status` |             | `string`                    | `undefined` |
| `reactionList`  | --               |             | `{ [key: string]: any; }[]` | `undefined` |
| `sent`          | `sent`           |             | `boolean`                   | `undefined` |
| `time`          | `time`           |             | `string`                    | `undefined` |


## Dependencies

### Used by

 - [kizuna-app](../App)

### Depends on

- [kizuna-icon](../kizuna-icon)
- [kizuna-message-react](../kizuna-message-react)

### Graph
```mermaid
graph TD;
  kizuna-message-box --> kizuna-icon
  kizuna-message-box --> kizuna-message-react
  kizuna-message-react --> kizuna-icon
  kizuna-app --> kizuna-message-box
  style kizuna-message-box fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
