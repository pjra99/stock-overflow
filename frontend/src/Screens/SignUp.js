import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const [userName, setUname] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const navigate = useNavigate();

  function Validate() {
    let flag = true;

    if (userName === "" || mail === "" || pass === "" || cpass === "") {
      alert("All fields are required!");
      flag = false;
    }
    if (pass !== cpass) {
      alert("Passwords don't match");
      flag = false;
    }
    if (!flag) {
      return;
    }
    if (flag) {
      navigate("/signin");
    }
  }

  return (
    <div className="bg-background h-screen">
      <div className="text-center pt-10 text-xl italic">Stock Overflow</div>
      <div className="justify-center flex">
        <div className="lg:w-1/3 w-screen lg:mx-0 pb-5 md:w-96 md:mx-10 mx-2 mt-24 h-5/6 rounded bg-white shadow-lg">
          <div className="flex justify-center py-6 border-b border-lightgray text-xl">
            Create an account
          </div>
          <div className="flex justify-center pr-2 mt-8">
            <input
              type="text"
              className="border border-gray w-2/3 py-2 rounded"
              placeholder=" Username"
              value={userName}
              onChange={(e) => setUname(e.target.value)}
            />{" "}
          </div>
          <div className="flex justify-center pr-2 mt-3">
            <input
              type="email"
              className="border border-gray w-2/3 py-2 rounded"
              placeholder=" Email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />{" "}
          </div>
          <div className="flex justify-center mt-3 pr-2">
            <input
              type="password"
              className="border border-gray w-2/3 py-2 rounded"
              placeholder=" Create a password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="flex justify-center mt-3 pr-2">
            <input
              type="password"
              className="border border-gray w-2/3 py-2 rounded"
              placeholder=" Confirm your password"
              value={cpass}
              onChange={(e) => setCpass(e.target.value)}
            />
          </div>

          <Link to="/signin">
            <div className="flex justify-center text-sm mt-1">
              Already have an account? Sign In
            </div>
          </Link>
          <div className="flex justify-center mt-6">
            <button
              className="px-4 py-2 bg-green rounded text-white"
              onClick={() => {
                Validate();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
