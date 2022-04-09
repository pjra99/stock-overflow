import { useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [reportVisibility, setReportVisibility] = useState("none");

  return (
    <div>
      <div className="h-screen bg-white w-72 shadow-xl pr-10">
        <div className="italic text-darkblue text-sm ml-5 mt-5 mb-5 ">
          Stock Overflow
        </div>
        <div className="flex pl-6 pt-10 pb-2 ">
          <img src="user.svg" />
          <span className="ml-4">User</span>
          <img src="down-arrow.svg" className="ml-36" />
        </div>
        <div
          className="flex pl-5 pt-5 py-2 w-56"
          onClick={() => {
            setReportVisibility(reportVisibility == "none" ? "block" : "none");
          }}
        >
          <img src="chart.svg" />
          <span className="ml-3"> Reports</span>
          {reportVisibility == "none" ? (
            <img src="down-arrow.svg" className="ml-28 pl-3" />
          ) : (
            <img src="up-arrow.svg" className="ml-28 pl-3" />
          )}
        </div>
        <div
          className="pl-7 pt-2 pb-5"
          style={{
            display: reportVisibility,
          }}
        >
          <div className="pt-1 text-green font-semibold text-sm flex justify-between">
            Goldbees <span className="ml-3">0.09%</span>
            <span>42.21</span>
          </div>
          <div className="pt-1 text-red font-semibold text-sm flex justify-between">
            HDFC Bank <span>-0.36%</span>
            <span>1518.6</span>
          </div>
          <div className="pt-1 text-green font-semibold text-sm flex justify-between">
            Goldbees <span className="ml-3">0.09%</span>
            <span>42.21</span>
          </div>
          <div className="pt-1 text-red font-semibold text-sm flex justify-between">
            HDFC Bank <span>-0.36%</span>
            <span>1518.6</span>
          </div>
        </div>
        <div className="flex pl-5 pt-5 py-2">
          <img src="search.svg" />
          <span className="ml-3"> Search</span>
        </div>
        <div className="flex pl-5 pt-5 py-2">
          <img src="bucket.svg" />
          <span className="ml-4">Sip</span>
        </div>
        <div className="flex pl-5 pt-5 py-2">
          <img src="chart.svg" />
          <span className="ml-3"> Portfolio</span>
        </div>
        <Link to="signin">
          <div
            className="float-right text-lg"
            style={{
              marginTop: reportVisibility == "block" ? "130px" : "254px",
            }}
          >
            Log Out
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Home;
