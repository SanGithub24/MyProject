import React, { useContext, useState } from 'react';
import { SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification, SLogo, SSidebar, SSidebarButton, STheme, SThemeLabel, SThemeToggler, SToggleThumb } from './styles';

import { logoimg } from '../../assets';

import { AiOutlineLeft} from 'react-icons/ai';

import {MdAddShoppingCart, MdLogout} from 'react-icons/md';

import {BsPeopleFill,BsBagPlusFill,BsBagHeartFill} from 'react-icons/bs';

import {GrGallery} from 'react-icons/gr';

import { ThemeContext } from '../../App';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {

  const {setTheme, theme} = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {pathname} = useLocation ();



  return (
    <SSidebar isOpen={sidebarOpen}>

      <>
        <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
          <AiOutlineLeft/>
        </SSidebarButton>
      </>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SLogo style={!sidebarOpen ? { width: `fit-content` } : {}}>
          <img src={logoimg} alt='' />
        </SLogo>
        {sidebarOpen && <span style={{ marginTop: '8px' }}>HappyHours</span>}
      </div>

      <SDivider/>

      {linksArray.map(({icon, label, notification, to}) => (

      <SLinkContainer key={label} isActive={pathname === to}>

        <SLink to={to} style={!sidebarOpen ? {width: `fit-content`} : {}}>

          <SLinkIcon>{icon}</SLinkIcon>

          {sidebarOpen && (
             <>
             <SLinkLabel>{label}</SLinkLabel>
             
             {!! notification && <SLinkNotification>{notification}</SLinkNotification> }
 
           </>
          )}

        </SLink>

      </SLinkContainer>

      ))}

      <SDivider/>

      {SecondrylinksArray.map(({icon, label}) =>(

        <SLinkContainer key={label}>

          <SLink to="/" style={!sidebarOpen ? {width: `fit-content`} : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen &&<SLinkLabel>{label}</SLinkLabel>}
          </SLink>

        </SLinkContainer>

      ))}

      <SDivider/>

      <STheme>

      {sidebarOpen &&<SThemeLabel>Dark Mode</SThemeLabel>}

          <SThemeToggler 
          isActive={theme === "dark"}
          onClick={() => setTheme((p) => (p === 'light' ? "dark" : "light"))}>

            <SToggleThumb style={theme === 'dark' ? {right: "1px"} : {}}/>
          </SThemeToggler>
        
      </STheme>

    </SSidebar>
  )
};

const linksArray = [
 

  {
    label : "Add Product",
    icon : <MdAddShoppingCart/>,
    to : "/addproduct",
    notification: 0,
  },

  {
    label : "Add Offers",
    icon : <BsBagPlusFill/>,
    to : "/addoffers",
    notification: 0,
  },

  {
    label : "Gallery",
    icon : <GrGallery/>,
    to : "/gallery",
    notification: 0,
  },

  {
    label : "Orders",
    icon : <BsBagHeartFill/>,
    to : "/orders",
    notification: 0,
  },

  {
    label : "Customers",
    icon : <BsPeopleFill/>,
    to : "/cusdetails",
    notification: 0,
  },

  {
    label : "Users",
    icon : <BsPeopleFill/>,
    to : "/users",
    notification: 0,
  },
]

const SecondrylinksArray = [

  {
    label : "Logout",
    icon : <MdLogout/>,
    to : "/login",
  },

]

export default Sidebar