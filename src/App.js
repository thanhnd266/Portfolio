import {useRef, useState, useEffect} from 'react';
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';
//components
import NavBar from './components/NavBar';
import Content from './components/Content/Content';

function App() {

  return (
    <ScrollingProvider>
      <NavBar useScrollSection={useScrollSection} />
      <Content Section={Section}/>
    </ScrollingProvider>
  );
}

export default App;
