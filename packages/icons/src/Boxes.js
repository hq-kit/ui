import * as React from 'react'
const SvgBoxes = (props) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 19-3.97 2.38a2 2 0 0 1-2.06 0l-3-1.8A2 2 0 0 1 2 17.87v-3.24a2 2 0 0 1 .97-1.71L7 10.5m5 8.5v-5.5m0 5.5 3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5m-5 3-5-3m5 3-5 3m5-3 5-3m-5 3 5 3m-5-3V8m-5 2.5V6.13a2 2 0 0 1 .97-1.71l3-1.8a2 2 0 0 1 2.06 0l3 1.8A2 2 0 0 1 17 6.13v4.37m-10 6-4.74-2.85M7 16.5v5.17m10-5.17 4.74-2.85M17 16.5v5.17M12 8 7.26 5.15M12 8l4.74-2.85"
    />
  </svg>
)
export default SvgBoxes
