import "./pool.css";
import { useDispatch } from "react-redux";
import { setProps, setSidePanel } from "../../redux/viewSlice";

function Pool({ name, amount, admins }) {
  const dispatch = useDispatch();

  const viewPoolDetails = () => {
    dispatch(setProps({ name, amount, admins }));
    dispatch(setSidePanel('details'));
  }

  return (
    <div className="card" onClick={viewPoolDetails}>
      <div className="pool">
        {name}
        <div className="">Pool</div>
      </div>
    </div>
  );
}

export default Pool;
