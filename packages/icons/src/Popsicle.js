import * as React from 'react'
const SvgPopsicle = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m22 22-5.5-5.5m2.1-2.1c.8-.8.8-2 0-2.8l-8.1-8.1a5.02 5.02 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1z" />
  </svg>
)
export default SvgPopsicle
