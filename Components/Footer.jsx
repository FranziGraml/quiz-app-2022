import React from "react";
import styled from "styled-components";
import bookmark from '../images/bookmark.png';
import notiz from '../images/notiz.png';
import user from '../images/user.png';
import zuhause from '../images/zuhause.png';
import {NavLink} from 'react-router-dom';



export default function Footer() {

return (
   <NavFooter>

   <LogoFooter>
     <NavLink to="/">
      <FooterImage src={zuhause} />
     </NavLink>
   </LogoFooter>

   <LogoFooter>
   <NavLink to="/Bookmark">
   <FooterImage src={bookmark} />
   </NavLink>
   </LogoFooter>

   <LogoFooter>
   <NavLink to="/Form">
   <FooterImage src={notiz} />
   </NavLink>
   </LogoFooter>
   
   <LogoFooter>
   <NavLink to="/Profile">
   <FooterImage src={user} />
   </NavLink>
   </LogoFooter>

   </NavFooter> 
);
}

const FooterImage = styled.img`
 width: 3rem;
 heigth: 3rem
`;


 const NavFooter = styled.footer`
  display: flex;
  background-color: rgba(236, 166, 166, 0.472);
  padding: 0.5rem;
  justify-content: space-around;
  position: sticky;
`;  

const LogoFooter = styled.span`
cursor: pointer;

&:hover {
  transform: scale(1.2);
  transition: all 0.5s ease-in-out;
  background-color: red;
}
`;
