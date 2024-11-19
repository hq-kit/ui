import * as React from 'react'
const SvgBrandEdge = (props) => (
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
      d="M19.4 17.144a9.01 9.01 0 0 1-11.22 3.003 8.993 8.993 0 0 1-1.266-15.57A9.014 9.014 0 0 1 18.472 5.73a9 9 0 0 1 2.523 5.64c.21 2.993-5.039 2.413-6.92 1.486 1.394-1.6.403-4.038-2.275-3.85-1.747.121-2.93 1.156-2.787 3.201.28 3.99 4.448 6.205 10.37 4.79m-16.36-4.37c-.283-4.044 8.725-7.229 11.258-2.689m-1.643 11.038c-2.996.21-5.167-4.725-3.57-9.748"
    />
  </svg>
)
export default SvgBrandEdge
