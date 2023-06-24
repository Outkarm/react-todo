import React from 'react';
import {
  Link, useNavigate, Route, Routes,
} from 'react-router-dom';
import SinglePage from './SinglePage';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to={`${navigate.path}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${navigate.path}/about-author`}>About Author</Link>
        </li>
      </ul>
      <Routes>
        <Route path={`${navigate.path}/:slug`} element={<SinglePage />} />
      </Routes>
    </div>
  );
};

export default About;
