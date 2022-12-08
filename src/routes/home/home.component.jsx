import React from 'react'; 

import './home.styles.scss';

// import Header from '../components/header/header.component';
import Profile from '../../components/profile/profile.component';
import Experience from '../../components/experience/experience.component';
import Projects from '../../components/projects/projects.component';
import Contact from '../../components/contact/contact.component';

function Home() {
	return (
		<main className="wrapper">
            {/* <Header /> */}
            <Profile />
            <Experience />
            <Projects />
            <Contact />
        </main>
	);
}

export default Home;