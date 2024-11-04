import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../constant/useDarkSide";
 
export default function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "white" ? true : false
    );
 
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };
 
    return (
        <>
            {/* <DarkModeSwitch className=" z-[9] p-3"
                // style={{ marginBottom: "2rem" }}
                checked={false}
                onChange={toggleDarkMode}
                size={50}
            /> */}
        </>
    );
}