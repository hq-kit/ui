import * as React from 'react'
const SvgBrandNix = (props) => (
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
      fill="currentColor"
      d="M9.9 8.586 5 17.38l-1.1-1.965 1.3-2.38H2.6L2 12l.6-1.034h3.7l1.3-2.38zm.3 7.035h9.7l-1.1 1.965h-2.6l1.3 2.38L16.9 21h-1.1L14 17.586h-2.7zm5.7-3.828L11 3h2.2l1.3 2.38L15.8 3h1.1l.6 1.034-1.9 3.31 1.4 2.38zM13.8 8.38H4l1.1-1.965h2.6l-1.3-2.38L7 3h1.1L10 6.31h2.7zm.3 7.035L19 6.62l1.1 1.965-1.3 2.38h2.6L22 12l-.6 1.034h-3.7l-1.3 2.38zm-6-3.207 4.9 8.69h-2.2l-1.3-2.38-1.1 2.38H7.1l-.6-1.035 1.9-3.31L7 14.276z"
    />
  </svg>
)
export default SvgBrandNix
