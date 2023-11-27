
import Align from './ProtfolioComponent/Home/Align';
import Features from './ProtfolioComponent/Features/Features';
import Resume from './ProtfolioComponent/Resume/Resume.js';
import Project from './ProtfolioComponent/Project/Project';
import Contact from './ProtfolioComponent/ContactMe/Contact';
function portfolio(props) {
  return ( 
    <>
      <Align visitor = 'false' />
      <Resume visitor = 'false'/>
      <Features visitor = 'false'/>
      <Project visitor = 'false'/>
      <Contact visitor = 'false'/>
    </>
  );
}

export default portfolio;
