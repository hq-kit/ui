import * as React from 'react'
const SvgBrandAngular = (props) => (
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
    <path fill="currentColor" d="M15.869 16.76H8.313l-.966 2.43L12.091 22l4.743-2.81zM14.249 2l6.28 14.046.653-10.713zM9.932 2 3 5.332l.653 10.714zm-.324 11.608h4.97L12.09 7.33z" />
  </svg>
)
export default SvgBrandAngular
