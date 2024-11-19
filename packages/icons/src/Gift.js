import * as React from 'react'
const SvgGift = (props) => (
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
      d="M12 8v13m0-13c-.362-1.49-.985-2.765-1.787-3.657C9.41 3.451 8.465 2.983 7.5 3a2.5 2.5 0 1 0 0 5M12 8c.362-1.49.985-2.765 1.787-3.657.803-.892 1.748-1.36 2.713-1.343a2.5 2.5 0 0 1 0 5m2.5 4v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M4 8h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"
    />
  </svg>
)
export default SvgGift
