import * as React from 'react'
const SvgBrandAutodesk = (props) => (
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
      d="m3.097 19 11.025-7.798h5.718c.177 0 .334.16.334.38 0 .18-.069.26-.157.32l-5.417 3.69c-.352.241-.474.721-.474 1.08l-.006 2.325H21V5.48a.5.5 0 0 0-.033-.188.5.5 0 0 0-.096-.159.4.4 0 0 0-.143-.102.4.4 0 0 0-.167-.03h-6.564L3 12.76v6.237h.097z"
    />
  </svg>
)
export default SvgBrandAutodesk
