import * as React from 'react'
const SvgBrandVimeo = (props) => (
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
      d="m3 8.494.995 1s1.494-1.102 1.991-.5c.507.608 1.855 7.64 2.49 8.988.553 1.183 1.968 2.887 3.981 1.499 1.991-1.499 7.466-5.494 8.462-11.486C21.36 5.337 19.923 4 18.43 4c-1.99 0-4.029 1.2-4.48 3.995 2.041-1.252 2.54.999 1.494 2.996-1.048 1.998-1.991 2.996-2.49 2.996-.487 0-.919-1.163-1.492-3.495C10.874 8.075 10.964 4 8.475 4S3 8.494 3 8.494"
    />
  </svg>
)
export default SvgBrandVimeo
