import React from 'react'

export default function Stats(props) {
    const {count, heading} = props;
  return (
    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">{count}</h2>
        <p className="leading-relaxed">{heading}</p>
      </div>
  )
}
