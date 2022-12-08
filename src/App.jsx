import React from 'react'; 

import Header from './components/header/header.component';
import Profile from './components/profile/profile.component';
import Experience from './components/experience/experience.component';
import Projects from './components/projects/projects.component';
import Contact from './components/contact/contact.component';

function App() {
	return (
		<main>
            <Header />
            <Profile />
            <Experience />
            <Projects />
            <Contact />
        </main>
	);
}

export default App;
