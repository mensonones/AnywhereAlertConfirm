# React Native Anywhere Alert Confirm

## Overview

This React Native Anywhere Alert Confirm provides a flexible and customizable alert system for your React Native application. It allows you to display alerts with custom titles, subtitles, and button alignments.

## Usage

### Installation

```bash
npm install react-native-anywhere-alert-confirm
# or
yarn add react-native-anywhere-alert-confirm
```

### Import and Integration

```javascript
import React, { useCallback, useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import AlertConfirm, {showAlertFunction} from 'react-native-anywhere-alert-confirm';

const App = () => {
  // ... your component logic

  const handleShowAlert = () => {
    showAlertFunction(
      'Alert Title',
      'This is a sample alert message.',
      handleConfirm,
      handleCancel,
      'right',
      'right',
      'right',
      '80%',
    );
  };

  // ... your component rendering

  return (
    <View>
      {/* Your component UI */}
       <AlertConfirm />
      {/* Other components */}
    </View>
  );
};

export default App;
```

### Customization

The `showAlertFunction` is used to trigger the alert. You can customize various aspects of the alert, such as title, subtitle, button alignments, and width percentage.

```javascript
showAlertFunction(
  'Custom Alert Title',
  'Custom alert message goes here.',
  handleConfirm,
  handleCancel,
  'left', // buttonAlignment: 'left', 'center', 'right' (default: 'right')
  'center', // titleAlignment: 'left', 'center', 'right' (default: 'right')
  'right', // subTitleAlignment: 'left', 'center', 'right' (default: 'right')
  '60%', // widthPercentage: '0% - 100%' (default: '80%')
);
```

### Styles

You can further customize the styles by modifying the `styles.js` file according to your application's design.

## Preview (Web and Android)

![React Native Custom Alert](https://github.com/mensonones/AnywhereAlertConfirm/blob/main/print/example.png)

## API

### `showAlertFunction`

Displays the custom alert with specified options.

- **Parameters:**
  - `title` (string): The title of the alert.
  - `subTitle` (string): The subtitle or main message of the alert.
  - `confirmCallback` (function): Callback function for the confirmation button.
  - `cancelCallback` (function): Callback function for the cancel button.
  - `buttonAlignment` (string): Alignment of buttons: 'left', 'center', 'right' (default: 'right').
  - `titleAlignment` (string): Alignment of the title: 'left', 'center', 'right' (default: 'right').
  - `subTitleAlignment` (string): Alignment of the subtitle: 'left', 'center', 'right' (default: 'right').
  - `widthPercentage` (string): Width percentage of the alert (default: '80%' - 0% to 100%).

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for using the React Native Anywhere Alert Confirm! If you encounter any issues or have suggestions for improvement, feel free to [open an issue]([https://github.com/your-repo-name](AnywhereAlertConfirm)https://github.com/mensonones/AnywhereAlertConfirm/issues) on GitHub. Happy coding!
