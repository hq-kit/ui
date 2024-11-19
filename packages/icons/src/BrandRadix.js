import * as React from 'react'
const SvgBrandRadix = (props) => (
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
      d="M13.615 5.5c0 .663.284 1.299.789 1.768S15.594 8 16.308 8a2.8 2.8 0 0 0 1.903-.732A2.41 2.41 0 0 0 19 5.5c0-.663-.284-1.299-.789-1.768A2.8 2.8 0 0 0 16.308 3c-.714 0-1.4.263-1.904.732a2.41 2.41 0 0 0-.789 1.768M5 3h5.385v5H5zm5.385 8v10c-1.407-.002-2.757-.514-3.762-1.429-1.005-.914-1.584-2.157-1.615-3.463-.03-1.305.49-2.57 1.452-3.524.96-.954 2.286-1.52 3.69-1.579z"
    />
  </svg>
)
export default SvgBrandRadix
