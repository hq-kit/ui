import * as React from 'react'
const SvgBrandGit = (props) => (
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
      d="m20.661 11.199-7.86-7.86a1.16 1.16 0 0 0-1.64 0l-1.63 1.63 2.07 2.072a1.376 1.376 0 0 1 1.744 1.755l1.994 1.995a1.379 1.379 0 1 1-.826.777l-1.86-1.86v4.895a1.379 1.379 0 1 1-1.135-.04v-4.94a1.376 1.376 0 0 1-.748-1.81l-2.043-2.04-5.388 5.39a1.16 1.16 0 0 0 0 1.64l7.86 7.858a1.16 1.16 0 0 0 1.639 0l7.823-7.823a1.16 1.16 0 0 0 0-1.64"
    />
  </svg>
)
export default SvgBrandGit
