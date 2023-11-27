import React from 'react'

import Align from '../Portfolio/ProtfolioComponent/Home/Align.js';
import Features from '../Portfolio/ProtfolioComponent/Features/Features.js';
import Resume from '../Portfolio/ProtfolioComponent/Resume/Resume.js';
import Project from '../Portfolio/ProtfolioComponent/Project/Project.js';
import Contact from '../Portfolio/ProtfolioComponent/ContactMe/Contact.js';
 const Profile = () => {

    return ( 
        <>
          <Align visitor = 'true'/>
          <Resume visitor = 'true'/>
          <Features visitor = 'true' />
          <Project visitor = 'true'/>
          <Contact visitor = 'true'/>
        </>
      );
}

export default Profile;