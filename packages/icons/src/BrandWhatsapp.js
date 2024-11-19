import * as React from 'react'
const SvgBrandWhatsapp = (props) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.997 9.983a.5.5 0 1 0 1 0v-1a.5.5 0 1 0-1 0zm0 0a5 5 0 0 0 4.998 5m0 0h1a.5.5 0 1 0 0-1h-1a.5.5 0 0 0 0 1M3 20.983l1.65-3.8A9 9 0 0 1 5.942 5.35a8.994 8.994 0 0 1 14.967 5.378 9 9 0 0 1-6.53 9.953 9 9 0 0 1-6.332-.597z"
    />
  </svg>
)
export default SvgBrandWhatsapp
