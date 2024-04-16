const themes = {
    light: {
        background: "white",
        color: "black"
    },
    dark: {
        background: "black",
        color: "white"
    }
}

function changeCssTheme(themeName){
    // themes[themeName].variable
    for (const variable in themes[themeName]) {
        document.documentElement.style.setProperty(`--${variable}`, themes[themeName][variable]);
        console.log(`Updated CSS variable --${variable}`);
    }
}

changeCssTheme("light");