import React, {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import {Helmet} from 'react-helmet'
import { darkTheme, lightTheme } from './styles/theme';
import { GlobalStyle } from './styles/globalStyles';

//import { BrowserRouter as Route} from 'react-router-dom';

import Routes from './Routes';
//import Login from './pages/Login';
import Layout from './components/Layout/Layout';
//import HomeScreen from './components/HomeScreen/HomeScreen';

export const ThemeContext = React.createContext(null);

const App = () => {

  const [theme, setTheme] = useState("light");
  const themeStyle = theme === 'light' ? lightTheme : darkTheme;
  
  return <ThemeContext.Provider value={{setTheme, theme}}>
  
  <ThemeProvider theme={themeStyle}>
    <GlobalStyle/>

    <Helmet>

      <title>HappyHours</title>

      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&family=Roboto+Slab:wght@500&family=Source+Code+Pro:wght@500&display=swap" rel="stylesheet"></link>


    </Helmet>

    <>
    
    <Layout>
          <Routes />
        </Layout>
          </>
      
  </ThemeProvider>
  </ThemeContext.Provider>
}

export default App
