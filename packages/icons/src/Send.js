import * as React from 'react'
const SvgSend = (props) => (
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
      d="M10.914 13.085a2 2 0 0 0-.67-.44l-7.93-3.18a.5.5 0 0 1 .024-.938l19-6.5a.496.496 0 0 1 .635.635l-6.5 19a.5.5 0 0 1-.937.024l-3.18-7.932a2 2 0 0 0-.442-.669m0 0 10.94-10.938"
    />
  </svg>
)
export default SvgSend
