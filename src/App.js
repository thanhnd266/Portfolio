import {
  ScrollingProvider, Section, useScrollSection
} from 'react-scroll-section';
//components
import Content from './components/Content/Content';
import NavBar from './components/NavBar';

function App() {

  return (
    <ScrollingProvider>
      <NavBar useScrollSection={useScrollSection} />
      <Content Section={Section}/>
    </ScrollingProvider>
  );
}

export default App;
