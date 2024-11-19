import * as React from 'react'
const SvgBrandDotenv = (props) => (
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
      d="M19.2 3A1.8 1.8 0 0 1 21 4.8v14.4a1.8 1.8 0 0 1-1.8 1.8H4.8A1.8 1.8 0 0 1 3 19.2V4.8A1.8 1.8 0 0 1 4.8 3zm-8 11.918H8.13v4.14h3.148v-.698H8.967v-1.127h2.078v-.698H8.966v-.918H11.2zm1.61 0h-.814v4.14h.777v-2.7l1.669 2.7h.838v-4.14h-.776v2.764zm3.837 0h-.906l1.48 4.14h.892l1.482-4.14h-.886l-1.014 3.063zM7.05 17.76H5.79v1.26h1.26z"
    />
  </svg>
)
export default SvgBrandDotenv
