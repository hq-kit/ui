import * as React from 'react'
const SvgBrandMysql = (props) => (
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
      d="M12.473 20.053c-1.352-.972-3.402-3.65-3.79-5.683-.46.729-1.422 1.894-1.895 1.894-1.42-.841-.544-3.763 0-5.683C5.276 9.224 4.45 8.253 4.419 6.792 1.245 3.534 4 1.8 6.788 3.951h.947c8.037.473 6.084 7.643 8.528 10.892 2.174.495 3.472 2.135 4.737 3.315-1.976-.189-2.638-.325-3.316 0C18.137 19.712 19.695 20.242 21 21M8.683 6.792h.01"
    />
  </svg>
)
export default SvgBrandMysql
