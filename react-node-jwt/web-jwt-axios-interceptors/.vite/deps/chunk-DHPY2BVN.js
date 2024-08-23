import {
  ThemeProvider_default,
  createCssVarsProvider,
  defaultTheme_default,
  extendTheme,
  identifier_default,
  require_jsx_runtime,
  useTheme_default
} from "./chunk-VMLG5I4F.js";
import {
  require_react
} from "./chunk-32E4H3EV.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/@mui/joy/InitColorSchemeScript/InitColorSchemeScript.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var defaultConfig = {
  attribute: "data-joy-color-scheme",
  colorSchemeStorageKey: "joy-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "joy-mode"
};

// node_modules/@mui/joy/styles/CssVarsProvider.js
var {
  CssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript: getInitColorSchemeScriptSystem
} = createCssVarsProvider({
  themeId: identifier_default,
  theme: defaultTheme_default,
  attribute: defaultConfig.attribute,
  modeStorageKey: defaultConfig.modeStorageKey,
  colorSchemeStorageKey: defaultConfig.colorSchemeStorageKey,
  defaultColorScheme: {
    light: defaultConfig.defaultLightColorScheme,
    dark: defaultConfig.defaultDarkColorScheme
  }
});
var getInitColorSchemeScript = getInitColorSchemeScriptSystem;

// node_modules/@mui/joy/styles/ThemeProvider.js
var React2 = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var useTheme = () => {
  const theme = useTheme_default(defaultTheme_default);
  if (true) {
    React2.useDebugValue(theme);
  }
  return theme[identifier_default] || theme;
};
function ThemeProvider({
  children,
  theme: themeInput
}) {
  let theme = defaultTheme_default;
  if (themeInput) {
    theme = extendTheme(identifier_default in themeInput ? themeInput[identifier_default] : themeInput);
  }
  return (0, import_jsx_runtime2.jsx)(ThemeProvider_default, {
    theme,
    themeId: themeInput && identifier_default in themeInput ? identifier_default : void 0,
    children
  });
}

export {
  CssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript,
  useTheme,
  ThemeProvider
};
//# sourceMappingURL=chunk-DHPY2BVN.js.map
