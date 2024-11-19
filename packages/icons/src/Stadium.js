import * as React from 'react'
const SvgStadium = (props) => (
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
      d="M4 12c0 .53.843 1.04 2.343 1.414C7.843 13.79 9.878 14 12 14s4.157-.21 5.657-.586C19.157 13.04 20 12.53 20 12M4 12c0-.53.843-1.04 2.343-1.414C7.843 10.21 9.878 10 12 10s4.157.21 5.657.586C19.157 10.96 20 11.47 20 12M4 12v7c0 .94 2.51 1.785 6 2v-3h4v3c3.435-.225 6-1.07 6-2v-7m-5-6h4V3h-4v7M7 6h4V3H7v7"
    />
  </svg>
)
export default SvgStadium
