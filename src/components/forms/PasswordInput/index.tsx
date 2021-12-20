import React, { useRef, useEffect, useCallback, useState } from "react";
import {
  TextInput as ReactInput,
  TextInputProps,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useField } from "@unform/core";
import {
  StyledLabel,
  StyledInputContainer,
  StyledInputRow,
  StyledValidationText,
} from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import { INPUT_TITLE_COLOR } from "assets/colors";

interface InputProps extends TextInputProps {
  name: string;
  label: string;
  leftIcon?: string;
  canRevealPassword: boolean;
}
interface InputReference extends ReactInput {
  value: string;
}
export default function PasswordInput({
  name,
  label,
  leftIcon,
  canRevealPassword,
  onChangeText,
  ...rest
}: InputProps) {
  const inputRef = useRef<InputReference>(null);
  const { fieldName, registerField, defaultValue = "", error } = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value;
        return "";
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value });
          inputRef.current.value = value;
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: "" });
          inputRef.current.value = "";
        }
      },
    });
  }, [fieldName, registerField]);

  const handleChangeText = useCallback(
    (value: string) => {
      if (inputRef.current) inputRef.current.value = value;
      if (onChangeText) onChangeText(value);
    },
    [onChangeText]
  );

  return (
    <StyledInputContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInputRow>
        {leftIcon && <Icon name={leftIcon} size={20} style={styles.Icon} />}
        <ReactInput
          style={styles.TextInput}
          ref={inputRef}
          onChangeText={handleChangeText}
          defaultValue={defaultValue}
          secureTextEntry={showPassword ? false : true}
          {...rest}
        />
        {canRevealPassword && (
          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? (
              <Icon name={"eye-slash"} size={20} style={styles.Icon} />
            ) : (
              <Icon name={"eye"} size={20} style={styles.Icon} />
            )}
          </TouchableOpacity>
        )}
      </StyledInputRow>
      <StyledValidationText>{error}</StyledValidationText>
    </StyledInputContainer>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    flex: 0.98,
    textAlignVertical: "center",
    paddingTop: 0,
    paddingBottom: 0,
  },
  TextInputPlaseHolder: {
    flex: 1,
    height: 35,
  },
  Icon: {
    marginRight: 8,
    color: INPUT_TITLE_COLOR,
  },
});
