import React from 'react';
import './App.css';
import ProfileCard, { profileCard } from './components/ProfileCard/ProfileCard.jsx'
import Nav from './components/Nav/Nav.jsx'


const uperMenuItem = [
  {
    label: 'VISIT SPRINGFIELD!',
    submenu:['NowHappening', 'LaterHappening'],
    id: 0,
  },
];

const lowerMenuItem = [
  {
    label: 'Springfield Attractions',
    submenu: ['Flanders Facts', 'Favourite Drinks at Moes'],
    Id: 1,
  },
  {
    label: 'Local Businesses',
    submenu: ['Kwik-E-Mart Specials', 'Power Plant Job Openings'],
    Id: 2,
  },
  {
    label: 'School Events',
    submenu: ['Band Practice', 'Parent-Teacher Night'],
    Id: 3,
  },
  {
    label: 'Community News',
    submenu: ['Bake Sale', 'Charity Run'],
    Id: 4,
  },
  {
    label: 'Sports',
    submenu: ['Softball League', 'Football Scores'],
    Id: 5,
  },
  {
    label: 'Weather',
    submenu: ['Weekly Forecast', 'Severe Weather Alerts'],
    Id: 6,
  },
  ]

function App() {
  return (
    <div>
    <Nav uperMenuData={uperMenuItem} lowerMenuData={lowerMenuItem} />
      <section className="blog-items team-cards">
          <div className="inner-wrapper">
            <div className="blog-container">
              {
                profileCard.map((x) => <ProfileCard 
                  keyId={x.id}
                  imageName={x.image}
                  nameHero={x.name} 
                  descriptionAfter={x.description}
                  emailLast={x.email}
                  />)
              }
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
