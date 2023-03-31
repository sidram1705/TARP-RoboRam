import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";
//import Map from "../../components/maps/Maps";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="listContainer">
          <div className="listTitle">Location Entry</div>
          <Table />
          <div className="widgets">
          <Widget type="sleep" />
          <Widget type="fatigue" />
          <Widget type="break" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
