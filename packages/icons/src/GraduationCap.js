import * as React from 'react'
const SvgGraduationCap = (props) => (
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
      d="M22 10v6M6 12.5V16c0 .796.632 1.559 1.757 2.121S10.41 19 12 19s3.117-.316 4.243-.879C17.368 17.56 18 16.796 18 16v-3.5m3.42-1.578a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
    />
  </svg>
)
export default SvgGraduationCap
