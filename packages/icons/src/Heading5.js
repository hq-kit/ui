import * as React from 'react'
const SvgHeading5 = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h8m-8 6V6m8 12V6m9 4h-4v3h1.3c1.5 0 2.7 1.1 2.7 2.5S19.8 18 18.3 18c-.5 0-.9-.1-1.3-.3" />
  </svg>
)
export default SvgHeading5
