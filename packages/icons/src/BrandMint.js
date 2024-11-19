import * as React from 'react'
const SvgBrandMint = (props) => (
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
      d="M7.079 7.43v6.328a2.823 2.823 0 0 0 2.812 2.813h4.219a2.823 2.823 0 0 0 2.812-2.813v-3.516a2.12 2.12 0 0 0-2.11-2.109 2.1 2.1 0 0 0-1.406.553A2.1 2.1 0 0 0 12 8.133a2.12 2.12 0 0 0-2.109 2.109v3.516h1.406v-3.516c0-.397.306-.703.703-.703s.704.306.704.703v3.516h1.406v-3.516c0-.397.306-.703.703-.703s.703.306.703.703v3.516a1.396 1.396 0 0 1-1.406 1.406H9.89a1.396 1.396 0 0 1-1.406-1.406V7.43zM12 3c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9-4.038-9-9-9m0 1.406A7.583 7.583 0 0 1 19.594 12 7.584 7.584 0 0 1 12 19.594 7.584 7.584 0 0 1 4.406 12 7.583 7.583 0 0 1 12 4.406"
    />
  </svg>
)
export default SvgBrandMint
