import React from 'react';
import './App.css';

//components
import PageHeader from './components/PageHeader';
import PageContent from './components/PageContent';

//you need to have the react variable to use jsx... the more you know
function App() {
  return (
    <div className='App'>
      <PageHeader/>
      <PageContent/>
    </div>
  );
}

export default App;
