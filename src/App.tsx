import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        {/* About Me Section */}
        <section id="about-me" className="section about-me">
          <div className="about-content">
            <h2>About <span>Me</span></h2>
            <p>As a passionate tech enthusiast, I am dedicated to shaping the future of technology through innovation and exploration. My journey in the digital landscape focuses on the dynamic realms of Web3 and smart contracts, where I leverage cutting-edge technologies to create impactful solutions.</p>
            <p>I thrive on the challenge of pushing boundaries, transforming ideas into reality, and contributing to the evolving narrative of decentralized applications. Join me as I explore the limitless possibilities of the tech world and the exciting potential of blockchain technology.</p>
          </div>
        </section>

        {/* Stake with Us Section */}
        <section id="stake-with-us" className="section stake-with-us">
          <div className="stake-content">
            <h2>Stake with Us</h2>
            <div className="stake-grid">
              {/* Stake Cards */}
              {stakeData.map((stake, index) => (
                <div className="stake-card" key={index}>
                  <img src={stake.image} alt={`${stake.name} Logo`} className="stake-image" />
                  <div className="stake-info">
                    <h3>{stake.name}</h3>
                    <p>APR: {stake.apr}%</p>
                    <p>Total Staked: {stake.totalStaked}</p>
                    <a href={stake.link} target="_blank" rel="noopener noreferrer">
                      <button>Stake</button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact-us" className="section contact-us">
          <div className="contact-content">
            <h2>Contact Us</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Updated stakeData array with individual links for each "Delegate" button
const stakeData = [
  { name: 'Celestia', apr: 12, totalStaked: '$500K', image: 'https://pbs.twimg.com/profile_images/1404854187721203715/zZp1s7c3_400x400.jpg', link: 'https://delegate-celestia.com' },
  { name: 'Cosmos', apr: 10, totalStaked: '$1.2M', image: 'https://pbs.twimg.com/profile_images/1724435354910851072/VgcKSi5J_400x400.jpg', link: 'https://delegate-cosmos.com' },
  { name: 'Quicksilver', apr: 15, totalStaked: '$300K', image: 'https://pbs.twimg.com/profile_images/1743937771046096897/xA8ls39q_400x400.png', link: 'https://delegate-quicksilver.com' },
  { name: 'Aptos', apr: 8, totalStaked: '$900K', image: 'https://pbs.twimg.com/profile_images/1556801889282686976/tuHF27-8_400x400.jpg', link: 'https://delegate-avalanche.com' },
  { name: 'Stride', apr: 11, totalStaked: '$1M', image: 'https://pbs.twimg.com/profile_images/1678377000468205568/UY9UaLF0_400x400.png', link: 'https://delegate-solana.com' },
  { name: 'Teritori', apr: 9, totalStaked: '$2.3M', image: 'https://pbs.twimg.com/profile_images/1545419250906660864/XfukKhac_400x400.jpg', link: 'https://delegate-binance.com' },
];

export default App;
