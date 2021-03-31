import * as React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export const DismissKeyboardHOC = Component => ({ children, ...props }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <Component {...props}>{children}</Component>
  </TouchableWithoutFeedback>
);
