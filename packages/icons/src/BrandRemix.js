import * as React from 'react'
const SvgBrandRemix = (props) => (
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
      d="M19.297 16.881c.166 2.08.166 3.055.166 4.119H14.54c0-.232.004-.444.008-.659.014-.669.028-1.365-.084-2.773-.145-2.06-1.054-2.519-2.723-2.519H4V11.3h7.976c2.108 0 3.162-.626 3.162-2.286 0-1.46-1.054-2.344-3.162-2.344H4V3h8.855C17.628 3 20 5.204 20 8.724c0 2.633-1.67 4.35-3.924 4.637 1.903.372 3.016 1.431 3.221 3.52M4 21v-2.795h5.205c.87 0 1.058.63 1.058 1.006V21z"
    />
  </svg>
)
export default SvgBrandRemix
