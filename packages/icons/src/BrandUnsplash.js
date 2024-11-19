import * as React from 'react'
const SvgBrandUnsplash = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10.875h5.625v4.5h6.75v-4.5H21V21H3zM8.625 3h6.75v4.5h-6.75z" />
  </svg>
)
export default SvgBrandUnsplash
