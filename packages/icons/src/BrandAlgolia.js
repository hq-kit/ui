import * as React from 'react'
const SvgBrandAlgolia = (props) => (
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
      d="M16.8 10.875c-.497-1.662-2.263-2.812-4.2-2.812a4.4 4.4 0 0 0-1.613.29 4.2 4.2 0 0 0-1.368.853c-.39.366-.7.802-.91 1.282-.208.48-.314.994-.309 1.512-.005.518.1 1.032.31 1.512s.518.916.91 1.282c.39.367.855.657 1.367.853s1.06.295 1.613.29c1.169 0 2.233-.401 3-1.124l5.4 5.062V3h-8.4C7.337 3 3 7.03 3 12s4.337 9 9.6 9a9.6 9.6 0 0 0 3.598-.69"
    />
  </svg>
)
export default SvgBrandAlgolia
