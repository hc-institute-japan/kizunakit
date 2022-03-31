# kizuna-calendar



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description | Type       | Default                                                                                                                                                                           |
| -------------- | ---------------- | ----------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dayNames`     | --               |             | `string[]` | `['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su']`                                                                                                                                          |
| `monthNames`   | --               |             | `string[]` | `[     'January',     'February',     'March',     'April',     'May',     'June',     'July',     'August',     'September',     'October',     'November',     'December',   ]` |
| `onChange`     | --               |             | `Function` | `undefined`                                                                                                                                                                       |
| `position`     | `position`       |             | `string`   | `undefined`                                                                                                                                                                       |
| `showFillDays` | `show-fill-days` |             | `boolean`  | `true`                                                                                                                                                                            |
| `value`        | `value`          |             | `string`   | `undefined`                                                                                                                                                                       |


## Events

| Event          | Description | Type                         |
| -------------- | ----------- | ---------------------------- |
| `dayChanged`   |             | `CustomEvent<CalendarEntry>` |
| `monthChanged` |             | `CustomEvent<CalendarEntry>` |


## Dependencies

### Used by

 - [kizuna-app](../App)

### Depends on

- [kizuna-icon](../kizuna-icon)
- [kizuna-button](../kizuna-button)

### Graph
```mermaid
graph TD;
  kizuna-calendar --> kizuna-icon
  kizuna-calendar --> kizuna-button
  kizuna-app --> kizuna-calendar
  style kizuna-calendar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*