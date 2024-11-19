import * as React from 'react'
const SvgBrandX = (props) => (
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
    <path fill="currentColor" d="M17.176 3h2.76l-6.03 7.625L21 21h-5.555l-4.35-6.293L6.117 21H3.355l6.45-8.155L3 3h5.695l3.932 5.752zm-.969 16.173h1.53L7.863 4.73h-1.64z" />
  </svg>
)
export default SvgBrandX
