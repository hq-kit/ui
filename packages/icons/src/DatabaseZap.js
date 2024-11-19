import * as React from 'react'
const SvgDatabaseZap = (props) => (
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
      d="M21 5c0 1.657-4.03 3-9 3S3 6.657 3 5m18 0c0-1.657-4.03-3-9-3S3 3.343 3 5m18 0v3M3 5v14c-.006.48.336.955.995 1.383.66.428 1.618.796 2.795 1.075s2.536.458 3.965.525c1.429.066 2.885.017 4.245-.143M21 12l-3 5h4l-3 5M3 12c.001.467.33.928.961 1.346s1.546.78 2.672 1.06c1.126.278 2.432.465 3.813.546 1.382.08 2.8.053 4.144-.082"
    />
  </svg>
)
export default SvgDatabaseZap
