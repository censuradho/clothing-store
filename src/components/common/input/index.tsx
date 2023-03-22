import { Box, ButtonIcon, Icon, TextHelper } from "@/components/common";
import { IconProps } from "@/components/common/icon/types";
import Image from "next/image";
import { ChangeEvent, forwardRef, KeyboardEvent } from "react";

import * as Styles from "./styles";
import { InputProps } from "./types";

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    errorMessage,
    fullWidth,
    leftIcon,
    rightIcon,
    onLeftIconClick,
    onRightIconClick,
    defaultValue,
    textHelper,
    onMask,
    format = 'string',
    disabled,
    loading,
    ...otherProps
  } = props;
  const hasError = !!errorMessage;

  const renderLabel = () => {
    if (!label) return null;
    return (
      <Box gap={0.5}>
        <Styles.Label
          htmlFor={otherProps?.id || ""}
        >
          {label}
        </Styles.Label>
        {textHelper && <TextHelper content={textHelper} />}
      </Box>
    );
  };

  const renderErrorMessage = () => {
    if (!hasError) return null;

    return (
      <Styles.ErrorMessage color="error">{errorMessage}</Styles.ErrorMessage>
    );
  };

  const renderIcon = (icon?: IconProps, callback?: () => void) => {
    if (!icon) return null

    if (callback) {
      return (
        <ButtonIcon
          type="button"
          label="icon"
          onClick={callback}
          icon={icon}
        />
      );
    }

    return (
      <Icon {...icon} />
    );
  };

  const renderLeftIcon = () => {
    if (!leftIcon) return null;

    return (
      <Styles.LeftIconView>
        {renderIcon(leftIcon, onLeftIconClick)}
      </Styles.LeftIconView>
    );
  };

  const renderRightIcon = () => {
    if (!rightIcon && !loading) return null;

    return (
      <Styles.RightIconView>
        {loading ? (
          <Image src="elipse-load.svg" alt="loading" width={30} height={30} />
        ) : renderIcon(rightIcon, onRightIconClick)}
      </Styles.RightIconView>
    );
  };

  return (
    <Styles.Container fullWidth={fullWidth}>
      {renderLabel()}
      <Styles.IconView>
        {renderLeftIcon()}
        <Styles.Input
          {...otherProps}
          ref={ref}
          disabled={disabled || loading}
          hasError={hasError}
          hasLeftIcon={!!leftIcon}
          hasRightIcon={!!rightIcon}
          onKeyUp={onMask}
        />
        {renderRightIcon()}
      </Styles.IconView>
      {renderErrorMessage()}
    </Styles.Container>
  );
});
