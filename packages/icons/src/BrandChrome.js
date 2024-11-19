import * as React from 'react'
const SvgBrandChrome = (props) => (
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
    <path fill="currentColor" fillRule="evenodd" d="M5.174 6.135c4.183-4.869 11.941-3.907 14.841 1.779h-6.97c-1.255 0-2.066-.028-2.945.435a4.15 4.15 0 0 0-2.082 2.733z" clipRule="evenodd" />
    <path fill="currentColor" fillRule="evenodd" d="M9.006 12a2.997 2.997 0 0 0 2.99 2.992A2.997 2.997 0 0 0 14.989 12a2.997 2.997 0 0 0-2.991-2.993A2.997 2.997 0 0 0 9.006 12" clipRule="evenodd" />
    <path fill="currentColor" fillRule="evenodd" d="M13.158 15.917c-1.679.499-3.644-.054-4.72-1.912a3393 3393 0 0 1-3.978-6.92c-3.456 5.297-.477 12.513 5.795 13.744z" clipRule="evenodd" />
    <path fill="currentColor" fillRule="evenodd" d="M14.776 9.007a4.095 4.095 0 0 1 .756 5.04c-.715 1.229-2.992 5.074-4.095 6.935 6.462.398 11.174-5.935 9.045-11.975z" clipRule="evenodd" />
  </svg>
)
export default SvgBrandChrome
