import * as React from 'react'
const SvgBrandHtml = (props) => (
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
      d="m3 3 1.637 16.172L11.98 21l7.384-1.828L21 3zm6.027 7.313h8.221l-.638 6.117-4.59 1.125-4.67-1.125-.278-3.13h2.234l.16 1.583 2.554.597 2.475-.597.28-2.567H6.951l-.6-6.012h11.296l-.2 1.97H8.827z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgBrandHtml
