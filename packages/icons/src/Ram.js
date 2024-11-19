import * as React from 'react'
const SvgRam = (props) => (
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
      strokeWidth={2}
      d="M2 14h20M2 14v2a2 2 0 0 0 2 2h5.034c.534 0 1.075-.469 1.552-.707C10.96 17.105 11.47 17 12 17s1.04.105 1.414.293c.477.238 1.018.707 1.552.707H20a2 2 0 0 0 2-2v-2M2 14V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6m-5.5-3h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1Zm-5 0h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1Zm-5 0h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1Z"
    />
  </svg>
)
export default SvgRam
