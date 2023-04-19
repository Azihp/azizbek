import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Section from './section';
import Article from './Article';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <App />
       <Section/>
       <Article/>
    </div>
 
);

