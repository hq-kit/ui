import * as React from 'react'
const SvgBrandPnpm = (props) => (
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
      fill="currentColor"
      d="M3 3v5.625h5.625V3zm6.188 0v5.625h5.623V3zm6.187 0v5.625H21V3zM9.188 9.188v5.624h5.623V9.189zm6.187 0v5.624H21V9.189zM3 15.375V21h5.625v-5.625zm6.188 0V21h5.623v-5.625zm6.187 0V21H21v-5.625z"
    />
  </svg>
)
export default SvgBrandPnpm
