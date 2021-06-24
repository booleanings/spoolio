import './home.css';
import PoolsContainer from './PoolsContainer';
import Header from '../header';
import SidePanel from '../sidepanel';
import 'react-sliding-side-panel/lib/index.css';

function Home() {
  return (
    <div>
      <Header />
      <SidePanel />
      <PoolsContainer />
    </div>
  );
}

export default Home;
