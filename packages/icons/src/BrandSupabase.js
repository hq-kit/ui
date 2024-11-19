import * as React from 'react'
const SvgBrandSupabase = (props) => (
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
      d="M11.923 2.863c-.011-.821-.97-1.175-1.442-.53l-7.127 9.709c-.842 1.147-.088 2.837 1.266 2.837h7.371l.087 6.259c.01.82.969 1.173 1.441.53l7.127-9.711c.841-1.146.087-2.836-1.265-2.836h-7.42z"
    />
  </svg>
)
export default SvgBrandSupabase
