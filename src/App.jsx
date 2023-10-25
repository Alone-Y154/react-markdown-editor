import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { MarkDown } from './components/Markdown';
import { Menu } from './components/Menu';
function App() {

  const [active, setActive] = useState(true);
  const [toggle, setToggle] = useState(true);

  const [theme, setTheme] = useState("Dark");


  const setDarkMode = () => {
    document.querySelector('body').setAttribute("class", "dark");
  }

  const setLightMode = () => {
    document.querySelector('body').setAttribute("class", "light");
  }


  const toggleTheme = () => {
    setToggle(!toggle);
    if (theme === "Light") {
      setTheme("Dark");
      setLightMode();
    } else {
      setTheme("Light");
      setDarkMode();
    }

  }
  const handleMenu = () => {
    setActive(!active)
  }

  return (
    <div className='app-container flex justify-center'>
      <div className='app-content w-full flex flex-col h-screen'>
        {active ? "" : <Menu toggle={toggle} toggleTheme={toggleTheme} />}

        <Navbar active={active} handleMenu={handleMenu} />
        <MarkDown active={active} />
      </div>
    </div>
  )
}

export default App
