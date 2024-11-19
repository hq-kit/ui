import * as React from 'react'
const SvgBrandShadcn = (props) => (
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
      d="M3 5.4c0-.84 0-1.26.164-1.581.143-.283.372-.511.655-.655C4.14 3 4.559 3 5.4 3h13.2c.84 0 1.26 0 1.581.164.282.144.511.373.655.655C21 4.14 21 4.559 21 5.4v13.2c0 .84 0 1.26-.164 1.581a1.5 1.5 0 0 1-.655.655C19.86 21 19.441 21 18.6 21H5.4c-.84 0-1.26 0-1.581-.164a1.5 1.5 0 0 1-.655-.655C3 19.86 3 19.441 3 18.6zm15.065 1.413a.938.938 0 0 0-1.326-1.326L5.712 16.514a.937.937 0 1 0 1.326 1.326zm1.16 6.384A.937.937 0 0 0 17.9 11.87l-5.804 5.804A.937.937 0 0 0 13.422 19z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgBrandShadcn
