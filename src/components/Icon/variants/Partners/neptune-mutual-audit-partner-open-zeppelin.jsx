import * as React from "react"

const SvgComponent = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M21 22V17H15.4652C13.9603 17 12.5654 17.7771 11.7947 19.0464L10 22H21Z" fill="white"/>
      <path d="M3 2V7H17.8964L21 2H3Z" fill="white"/>
      <path d="M9.83645 10.2978L3 22H8.82477L17 8H13.7838C12.166 8 10.667 8.87252 9.83713 10.2978H9.83645Z" fill="white"/>
    </svg>
  )
}

export default SvgComponent