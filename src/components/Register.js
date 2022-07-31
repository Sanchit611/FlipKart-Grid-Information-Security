import React from "react";

export default function Register(props) {
  const {lift, kind} = props;
  const submitHandler = (e) => {
    e.preventDefault();
    lift(false);
  }
  let data = {first:"", second:""};
  if(kind === "repo"){
    data.first = "Github Repository Name"
    data.second = "Github Repository URL"
  }
  else{
    data.first = "GitHub Username"
    data.second = "GitHub User URL"
  }
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
            GitHub Credentials
          </h2>

          <form class="max-w-lg border rounded-lg mx-auto" onSubmit={submitHandler}>
            <div class="flex flex-col gap-4 p-4 md:p-8">
              
              
              <div>
                <label
                  for="password"
                  class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  {data.second}
                </label>
                <input
                  name="text"
                  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                />
              </div>

              <button type = "submit" class="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                Submit
              </button>
            </div>

            <div class="flex justify-center items-center bg-gray-100 p-4">
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
