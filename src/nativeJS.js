import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

export const App = () => {
    const currentYear = new Date().getFullYear();

    return /*#__PURE__*/ _jsx("div", {
        className: "App",
        children: /*#__PURE__*/ _jsxs("header", {
            className: "App-header",
            children: [
                /*#__PURE__*/ _jsx("img", {
                    // src: logo,
                    className: "App-logo",
                    alt: "logo",
                }),
                /*#__PURE__*/ _jsxs("p", {
                    children: [
                        "Edit ",
                        /*#__PURE__*/ _jsx("code", {
                            children: "src/App.js",
                        }),
                        " and save to reload.",
                    ],
                }),
                /*#__PURE__*/ _jsx("a", {
                    className: "App-link",
                    href: "https://reactjs.org",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Learn React",
                }),
                /*#__PURE__*/ _jsx("p", {
                    children: currentYear,
                }),
            ],
        }),
    });
};
