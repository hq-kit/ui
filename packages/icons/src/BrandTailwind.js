import * as React from 'react'
const SvgBrandTailwind = (props) => (
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
      fillRule="evenodd"
      d="M11.993 6c-2.662 0-4.32 1.332-4.99 3.994 1.004-1.33 2.168-1.828 3.506-1.506.756.19 1.31.747 1.905 1.346.975 1.01 2.11 2.167 4.582 2.167 2.662 0 4.335-1.333 5.004-3.996q-1.506 1.998-3.49 1.492c-.757-.19-1.31-.745-1.906-1.346C15.614 7.157 14.48 6 11.993 6m-4.99 6C4.327 12 2.669 13.333 2 15.996c1.004-1.331 2.167-1.83 3.505-1.507.757.19 1.31.746 1.906 1.346C8.385 16.844 9.52 18 11.993 18c2.662 0 4.334-1.331 5.003-3.994-1.003 1.33-2.167 1.828-3.505 1.492-.756-.191-1.31-.747-1.905-1.346C10.611 13.156 9.476 12 7.004 12z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgBrandTailwind
