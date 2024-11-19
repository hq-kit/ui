import * as React from 'react'
const SvgDatabaseBackup = (props) => (
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
      d="M21 5c0 1.657-4.03 3-9 3S3 6.657 3 5m18 0c0-1.657-4.03-3-9-3S3 3.343 3 5m18 0v4.3M3 5v14c0 .649.63 1.28 1.796 1.8 1.166.518 2.806.898 4.674 1.08M3 12c-.001.56.466 1.107 1.35 1.583.883.475 2.147.858 3.65 1.107M12 12v4m0 0h4m-4 0 2.09-2.09c.87-.87 2.08-1.41 3.41-1.41A4.5 4.5 0 0 1 22 17a5 5 0 0 1-9 3"
    />
  </svg>
)
export default SvgDatabaseBackup
