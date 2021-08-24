import React from 'react';

import MenuLayout from '../layouts/MenuLayout';
import ContactLayout from '../layouts/ContactLayout';
import GalleryLayout from '../layouts/GalleryLayout';
import CateringLayout from '../layouts/CateringLayout';
import Logo from '../components/Logo';

const Start = () => {
  return ( 
    <>
      <MenuLayout />
      <ContactLayout/>
      <Logo />
      <CateringLayout />
      <GalleryLayout />
    </>
  );
}
 
export default Start;