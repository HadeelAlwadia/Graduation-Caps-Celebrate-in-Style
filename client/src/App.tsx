
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { useContext } from 'react';
import { AppContext } from './store';
import { LuSunMoon } from "react-icons/lu";
import { IoIosMoon } from "react-icons/io";
import  './App.css'




const App = () => {
   const { theme,dispatch } = useContext(AppContext);
   const handleToggleTheme = () => dispatch({ type: 'toggleTheme' })

   return <>
       <p className={`theme-coun-${theme} theme-coun`}
         onClick={handleToggleTheme}>
         {theme === 'dark' ?
            <IoIosMoon size={22} cursor={'pointer'} /> : <LuSunMoon size={22} cursor={'pointer'} />
         } {theme}</p>
      <RouterProvider router={routes} />
   </>

}

export default App;
