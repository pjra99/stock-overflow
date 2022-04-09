import { useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [reportVisibility, setReportVisibility] = useState("none");

  return (
    <div className="flex">
      <div className="h-screen bg-white w-1/3 shadow-xl pr-10 pl-7">
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
        <div className="flex pl-5 pt-5 py-2 fi:mb-0 -mb-16">
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
      <div className="w-full px-20">
        <div className="border-b border-gray py-5 mt-16 text-xl">Hi, User</div>
        <div className="flex justify-between mt-20 mr-60">
          <div>
            Available Balance.
            <div className="text-2xl text-darkblue font-semibold mt-5">
              7802.32
            </div>
            <button className="py-2 px-5 mt-20 bg-green text-white rounded">
              Buy Virtual Money
            </button>
          </div>
          <div>
            Profit
            <div className="text-2xl text-green font-semibold mt-5">80.22</div>
            <button className="py-2 px-5 bg-darkblue mt-20 text-white rounded">
              Create Buckets
            </button>
          </div>
          <div>
            Money Invested in Virtual Money
            <div className="text-2xl text-darkblue font-semibold mt-5">
              2000.00
            </div>
          </div>
        </div>
        {/* <div className="flex mt-20">
          <button className="py-2 px-5 bg-green text-white rounded">
            Buy Virtual Money
          </button>
          <button className="py-2 px-5 bg-darkblue ml-10 text-white rounded">
            Create Buckets
          </button>
        </div> */}
      </div>
    </div>
  );
}
export default Home;
