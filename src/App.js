import React from 'react';
import './App.css';
import ProfileCard, { profileCard } from './components/ProfileCard/ProfileCard.jsx'
import Nav from './components/Nav/Nav.jsx'


function App() {
  return (
    <div>
      <Nav />
      <section className="blog-items team-cards">
          <div className="inner-wrapper">
            <div className="blog-container">
              {
                profileCard.map((x) => <ProfileCard 
                  key={x.id}
                  pic={x.image}
                  name={x.name} 
                  description={x.description}
                  email={x.email}
                  />)
              }
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
