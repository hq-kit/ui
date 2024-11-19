import * as React from 'react'
const SvgUserCog = (props) => (
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
      d="M12.434 13.38A8 8 0 0 0 2 21h10.434m7.066-6.7-.4.9m-2.2 5.6-.4.9m5.2-2.2-.9-.4m-5.6-2.2-.9-.4m7.4 0-.9.4m-5.6 2.2-.9.4m5.2 2.2-.4-.9m-2.2-5.6-.4-.9M15 8A5 5 0 1 1 5 8a5 5 0 0 1 10 0m6 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
)
export default SvgUserCog
