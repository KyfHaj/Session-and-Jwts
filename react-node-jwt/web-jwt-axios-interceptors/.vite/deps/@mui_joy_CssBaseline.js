"use client";
import {
  GlobalStyles_default,
  _extends,
  defaultTheme_default,
  identifier_default,
  require_jsx_runtime,
  require_prop_types
} from "./chunk-VMLG5I4F.js";
import "./chunk-2KHBIA62.js";
import {
  require_react
} from "./chunk-32E4H3EV.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/@mui/joy/CssBaseline/CssBaseline.js
var React2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/joy/GlobalStyles/GlobalStyles.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
function GlobalStyles(props) {
  return (0, import_jsx_runtime.jsx)(GlobalStyles_default, _extends({}, props, {
    defaultTheme: defaultTheme_default,
    themeId: identifier_default
  }));
}
var GlobalStyles_default2 = GlobalStyles;

// node_modules/@mui/joy/CssBaseline/CssBaseline.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
function CssBaseline(props) {
  const {
    children,
    disableColorScheme = false
  } = props;
  return (0, import_jsx_runtime3.jsxs)(React2.Fragment, {
    children: [(0, import_jsx_runtime2.jsx)(GlobalStyles_default2, {
      styles: (theme) => {
        var _components$JoyTypogr, _components;
        const colorSchemeStyles = {};
        if (!disableColorScheme) {
          Object.entries(theme.colorSchemes).forEach(([key, scheme]) => {
            var _scheme$palette;
            colorSchemeStyles[theme.getColorSchemeSelector(key).replace(/\s*&/, "")] = {
              colorScheme: (_scheme$palette = scheme.palette) == null ? void 0 : _scheme$palette.mode
            };
          });
        }
        const defaultTypographyLevel = (_components$JoyTypogr = (_components = theme.components) == null || (_components = _components.JoyTypography) == null || (_components = _components.defaultProps) == null ? void 0 : _components.level) != null ? _components$JoyTypogr : "body-md";
        return _extends({
          html: {
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            // Change from `box-sizing: content-box` so that `width`
            // is not affected by `padding` or `border`.
            boxSizing: "border-box",
            // Fix font resize problem in iOS
            WebkitTextSizeAdjust: "100%"
          },
          "*, *::before, *::after": {
            boxSizing: "inherit"
          },
          "strong, b": {
            fontWeight: theme.vars.fontWeight.lg
          },
          body: _extends({
            margin: 0,
            // Remove the margin in all browsers.
            color: theme.vars.palette.text.primary,
            fontFamily: theme.vars.fontFamily.body
          }, theme.typography[defaultTypographyLevel], {
            backgroundColor: theme.vars.palette.background.body,
            "@media print": {
              // Save printer ink.
              backgroundColor: theme.vars.palette.common.white
            },
            // Add support for document.body.requestFullScreen().
            // Other elements, if background transparent, are not supported.
            "&::backdrop": {
              backgroundColor: theme.vars.palette.background.backdrop
            }
          })
        }, colorSchemeStyles);
      },
      defaultTheme: defaultTheme_default
    }), children]
  });
}
true ? CssBaseline.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: import_prop_types.default.node,
  /**
   * Disable `color-scheme` CSS property.
   *
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  disableColorScheme: import_prop_types.default.bool
} : void 0;
var CssBaseline_default = CssBaseline;
export {
  CssBaseline_default as default
};
//# sourceMappingURL=@mui_joy_CssBaseline.js.map
