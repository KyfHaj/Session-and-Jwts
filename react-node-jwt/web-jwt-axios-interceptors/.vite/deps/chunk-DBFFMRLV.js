import {
  _extends,
  createStyled,
  defaultTheme_default,
  identifier_default,
  useThemeProps
} from "./chunk-VMLG5I4F.js";

// node_modules/@mui/joy/styles/styled.js
var styled = createStyled({
  defaultTheme: defaultTheme_default,
  themeId: identifier_default
});
var styled_default = styled;

// node_modules/@mui/joy/styles/useThemeProps.js
function useThemeProps2({
  props,
  name
}) {
  return useThemeProps({
    props,
    name,
    defaultTheme: _extends({}, defaultTheme_default, {
      components: {}
    }),
    themeId: identifier_default
  });
}

export {
  styled_default,
  useThemeProps2 as useThemeProps
};
//# sourceMappingURL=chunk-DBFFMRLV.js.map
