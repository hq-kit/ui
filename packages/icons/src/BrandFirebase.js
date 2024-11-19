import * as React from 'react'
const SvgBrandFirebase = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
    className={`cleon-icons ${props.className ? props.className : 'size-4'}`}
    data-slot="icon"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="m19 18.14-6.387 3.683a1.3 1.3 0 0 1-1.313 0L5 18.14 16.419 6.183l.306-.091c.262 0 .411.118.438.364zM9.681 6.365 5.7 13.23 7.362 2.364C7.39 2.118 7.538 2 7.8 2c.175 0 .289.055.35.227l1.881 3.592zM13.62 7.51l-8.356 8.72 6.343-11.184c.088-.182.219-.264.394-.264s.289.082.35.264z"
    />
  </svg>
)
export default SvgBrandFirebase
