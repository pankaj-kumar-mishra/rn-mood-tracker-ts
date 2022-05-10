import React, { FC, useMemo } from 'react';
import { StyleSheet, Text, TextProps, View } from 'react-native';
import { theme } from '../theme';

type AppTextProps = TextProps & {
  fontFamily?: 'bold' | 'regular' | 'italic';
  fontSize?: 10 | 12 | 14 | 16 | 18 | 20;
};

const AppText: FC<AppTextProps> = ({
  children,
  fontFamily = 'regular',
  fontSize = 14,
  ...props
}) => {
  const fontStyle = useMemo(() => {
    switch (fontFamily) {
      case 'bold':
        return theme.fontFamilyBold;
      case 'italic':
        return theme.fontFamilyLight;
      case 'regular':
        return theme.fontFamilyRegular;
      default:
        return theme.fontFamilyRegular;
    }
  }, [fontFamily]);

  return (
    <Text {...props} style={[props.style, { fontFamily: fontStyle, fontSize }]}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({});
