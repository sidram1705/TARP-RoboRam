import "./widget.scss";
import BoltIcon from '@mui/icons-material/Bolt';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import TimerIcon from '@mui/icons-material/Timer';

const Widget = ({ type }) => {
  let data;


  switch (type) {
    case "sleep":
      data = {
        title: "Sleep Schedule",
        status: "Well Rested",
        icon: (
          <BedtimeIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "fatigue":
      data = {
        title: "Fatigue Level",
        status: "Low",
        icon: (
          <BoltIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "break":
      data = {
        title: "Last Stop",
        status: "3 Hrs ago",
        icon: (
          <TimerIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.status}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
