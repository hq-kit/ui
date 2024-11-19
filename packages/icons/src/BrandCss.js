import * as React from 'react'
const SvgBrandCss = (props) => (
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
      fillRule="evenodd"
      d="m3 3 1.637 16.172L11.98 21l7.384-1.828L21 3zm3.752 7.313h8.22l.24-2.039h-8.66l-.2-1.97h11.295L16.609 16.43l-4.59 1.125-4.67-1.125-.28-2.11 4.95 1.161 2.475-.597.28-2.567H6.95z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgBrandCss
