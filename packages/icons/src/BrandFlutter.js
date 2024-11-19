import * as React from 'react'
const SvgBrandFlutter = (props) => (
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
    <path fill="currentColor" d="M13.528 2 3 12l3.242 3.083L19.986 2.011h-6.447zm.012 9.227-5.67 5.381L13.54 22H20l-5.66-5.39L20 11.227z" />
  </svg>
)
export default SvgBrandFlutter
