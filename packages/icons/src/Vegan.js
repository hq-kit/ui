import * as React from 'react'
const SvgVegan = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14m0 0q6 0 6-6-6 0-6 6m1.41-4.4a10 10 0 1 0 3 3" />
  </svg>
)
export default SvgVegan
