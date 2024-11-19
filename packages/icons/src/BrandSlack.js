import * as React from 'react'
const SvgBrandSlack = (props) => (
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
      d="M12 12V5.25M12 12h6.75M12 12v6.75M12 12H5.25M12 5.25a2.25 2.25 0 0 1 4.5 0V12M12 5.25A2.25 2.25 0 1 0 9.75 7.5m6.75 2.25A2.25 2.25 0 1 1 18.75 12m0 0a2.25 2.25 0 0 1 0 4.5H12m2.25 0A2.25 2.25 0 1 1 12 18.75m0 0a2.25 2.25 0 0 1-4.5 0V12m0 2.25A2.25 2.25 0 1 1 5.25 12m0 0a2.25 2.25 0 0 1 0-4.5H12"
    />
  </svg>
)
export default SvgBrandSlack
