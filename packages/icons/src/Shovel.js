import * as React from 'react'
const SvgShovel = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.5 14.5 16 8M2 22v-5l5-5 5 5-5 5zM17 2l5 5-.5.5a3.53 3.53 0 0 1-5 0 3.53 3.53 0 0 1 0-5z" />
  </svg>
)
export default SvgShovel
