import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import Button from '../../components/Button/Button'
import './Home.css';

const Home = () => {
  return (
    <MainLayout>
      <div className="home">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm John Doe, a passionate web developer.</p>
        <Button label="View Projects" onClick={() => console.log('View Projects')} />
      </div>
    </MainLayout>
  );
};

export default Home;
