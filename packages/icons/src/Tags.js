import * as React from 'react'
const SvgTags = (props) => (
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
    <path fill="currentColor" d="M6.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42zM7 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </svg>
)
export default SvgTags
