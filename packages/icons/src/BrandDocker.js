import * as React from 'react'
const SvgBrandDocker = (props) => (
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
      d="M7.737 9.75H4.895v3.375h2.842m0-3.375v3.375m0-3.375h2.842m-2.842 0V6.375h2.842m-2.842 6.75h2.842m0-3.375v3.375m0-3.375h2.842m-2.842 0V6.375m0 6.75h2.842V9.75m0 0V6.375m-2.842 0h2.842m-2.842 0V3h2.842v3.375M4.488 18.75c1.421 0 1.94-.084 2.803-.878M9.63 16.5v.011M21 12.607c-1.71-.388-2.559-1.215-3.338-3.307-.46.783-1.044 1.764-.871 2.7.026.268-.303 1.125-.528 1.125H3C3 18.984 5.997 21 8.87 21c3.907.024 7.416-1.548 9.335-5.625 1.086-.114 2.175-1.693 2.795-2.768"
    />
  </svg>
)
export default SvgBrandDocker
