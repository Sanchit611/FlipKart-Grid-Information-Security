import React from "react";
import TextField from "../components/TextField";
import { useNavigate } from "react-router-dom"
const parameters = ["Percent of merged pull requests", "Total stars of repositories", "Total forks of repositories "," Number of Organisations", "Commit frequency per month"];

export default function CriticalValues() {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/user-analyser")
  }
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Fill in the Critical Values according to your requirements
            </h2>

            <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              Only if each parameter of the profile exceeds the critical value
              and the aggregate value surpasses a threshold, we declare the user
              as trustworthy. Else, we give a % chance of the user being
              malicious (on the basis of our ML algorithm on the parameters)
            </p>
          </div>

          <form class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto" onSubmit={submitHandler}>
            {parameters.map((el, idx) => (
              <TextField key={idx} parameter={el} />
            ))}
            <button style={{ outline: "none", padding: "0px" }}>
              <a className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                Submit Values
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
