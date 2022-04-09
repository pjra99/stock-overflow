import { useState } from "react";
function Home() {
  const [reportVisibility, setReportVisibility] = useState("none");

  return (
    <div>
      <div className="h-screen bg-white w-72 shadow-xl">
        <div className="italic text-darkblue ml-5 mt-5">Stock Overflow</div>
        <div className="flex pl-6 pt-10 pb-2 w-56 ">
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
          className="px-5 pt-2"
          style={{
            display: reportVisibility,
          }}
        >
          <div className="pt-1 text-green font-bold text-sm flex justify-between">
            Goldbees <span>0.09%</span>
            <span>42.21</span>
          </div>
          <div className="pt-1 text-red font-bold text-sm flex justify-between">
            HDFC Bank <span>-0.36%</span>
            <span>1518.6</span>
          </div>
          <div className="pt-1 text-green font-bold text-sm flex justify-between">
            Goldbees <span>0.09%</span>
            <span>42.21</span>
          </div>
          <div className="pt-1 text-red font-bold text-sm flex justify-between">
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
      </div>
    </div>
  );
}
export default Home;
