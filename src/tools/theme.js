export const setTheme = (theme) => {
    const htmlTag = document.documentElement;
    htmlTag.setAttribute("theme", theme);
};