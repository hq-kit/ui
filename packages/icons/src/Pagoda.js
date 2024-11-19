import * as React from 'react'
const SvgPagoda = (props) => (
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
      d="M17 10c.667.667 2.6 2 5 2l-.17.342A3 3 0 0 1 19.147 14H4.855a3 3 0 0 1-2.685-1.658L2 12c2.4 0 4.333-1.333 5-2m10 0H7m10 0V6M7 10V6m12 16v-8M5 22v-8m-2 8h18m-11 0v-3a2 2 0 0 1 4 0v3m5-18c-1.453 0-2.735-.489-3.668-1.022-.984-.563-1.476-.844-1.728-.911C13.35 2 13.015 2 12.344 2h-.687c-.672 0-1.008 0-1.26.067-.253.067-.745.348-1.729.91C7.735 3.512 6.453 4 5 4l.17.342A3 3 0 0 0 7.855 6h8.292a3 3 0 0 0 2.683-1.658z"
    />
  </svg>
)
export default SvgPagoda
