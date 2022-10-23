import { useState, useEffect } from "react";
import  ThemeDark from '../../images/themedark.png';
import ThemeLight from '../../images/themelight.png';

const Theme = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    


  return (
    <div className="flex items-center w-12 h-12 cursor-pointer" onClick={handleThemeSwitch}>
        { theme === 'light' ?
            <img src={ThemeDark} alt='dark' />
            :
            <img src={ThemeLight} alt='light' />
        }
    </div>
  )
}

export default Theme;