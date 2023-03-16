/*
============================================
; Title:  theme.js
; Author: Professor Richard Krasso
; Date:   15 March 2023
; Modified By: Hannah Del Real
; Description: JavaScript for index.html using JS function to display user's preference between light or dark theme.
;===========================================
*/

/*
 Default theme is set to light.
*/
function setDefaultTheme()
{
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}


/*
 Set the HTML body to the user's selected theme. If one has not been selected, set the theme to light-theme.
*/
function setSelectedTheme()
{
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}