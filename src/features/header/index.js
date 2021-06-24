import CreatePool from "../pool/create/CreatePool";
import { setSidePanel } from "../../redux/viewSlice";
import { useDispatch } from 'react-redux';

function Header() {
  const dispatch = useDispatch();

  const handleCreatePool = () => {
    dispatch(setSidePanel('createPool'));  
  }

  return (
      <header>
          <div>
              Poolio
          </div>
          <div>
             <button className="btn btn-primary" onClick={() => handleCreatePool()}>Create Pool</button>
          </div>
      </header>
  );
}

export default Header;
