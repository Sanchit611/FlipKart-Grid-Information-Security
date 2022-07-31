import React from 'react'

export default function TextField(props) {
  return (
    <>
        <div>
              <label
                for="first-name"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                {props.parameter}
              </label>
              <input
              type="number"
                name="first-name"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
    </>
  )
}
