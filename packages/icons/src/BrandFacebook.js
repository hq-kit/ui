import * as React from 'react'
const SvgBrandFacebook = (props) => (
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
      d="M9.826 20.799v-6.007H7.968v-2.76h1.858v-1.19c0-3.075 1.386-4.498 4.392-4.498.568 0 1.551.112 1.954.224v2.5a12 12 0 0 0-1.04-.032c-1.476 0-2.045.56-2.045 2.02v.977h2.941l-.504 2.76h-2.433V21C17.548 20.458 21 16.65 21 12.033 21 7.043 16.97 3 12 3s-9 4.044-9 9.033a9.03 9.03 0 0 0 6.826 8.766"
    />
  </svg>
)
export default SvgBrandFacebook
