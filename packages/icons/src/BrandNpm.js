import * as React from 'react'
const SvgBrandNpm = (props) => (
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
      d="M7.455 14.222V16h3.636v-1.778H22V8H2v6.222zm0 0V8m6.363 0v6.222m2.728-3.555v3.555M4.727 10.667v3.555m6.364-3.555v.889m8.182-.89v3.556"
    />
  </svg>
)
export default SvgBrandNpm
