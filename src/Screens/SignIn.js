import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  function Validate() {
    if (mail === "" && pass === "") {
      alert("Email/password can't be empty!");
      return;
    }
    if (mail === "") {
      alert("Email Required!");
      return;
    }
    if (pass === "") {
      alert("Password Required!");
      return;
    }
    navigate("/");
  }
  return (
    <div className="bg-background h-screen">
      <div className="text-center pt-10 text-xl italic">Stock Overflow</div>
      <div className="justify-center flex">
        <div className="lg:w-1/3 w-screen lg:mx-0 md:w-96 md:mx-10 mx-2 mt-24 h-80 rounded bg-white shadow-lg">
          <div className="flex justify-center py-6 border-b border-lightgray text-xl">
            Login
          </div>
          <div className="flex justify-center pr-2 mt-8">
            <input
              type="email"
              className="border border-gray w-2/3 py-2 my-1 rounded"
              placeholder=" Email"
              id="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />{" "}
          </div>
          <div className="flex justify-center mt-3  pr-2">
            <input
              type="password"
              className="password border border-gray w-2/3 py-2 rounded"
              placeholder=" Password"
              id="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="flex justify-center mt-10">
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
export default SignIn;
