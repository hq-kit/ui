import * as React from 'react'
const SvgEggOff = (props) => (
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
      d="M6.399 6.399c-1.037 1.758-1.75 3.79-1.9 5.6-.37 4.43 1.27 9.95 7.5 10 3.257-.025 5.26-1.546 6.376-3.624m1.157-4.5q.046-.938-.032-1.875c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297M2 2l20 20"
    />
  </svg>
)
export default SvgEggOff
