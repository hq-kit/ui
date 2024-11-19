import * as React from 'react'
const SvgBrandPrisma = (props) => (
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
      d="M20.882 17.238 13.407 2.632a1.13 1.13 0 0 0-.417-.445c-.18-.111-.39-.175-.606-.185a1.3 1.3 0 0 0-.625.12c-.193.093-.354.232-.467.402L3.184 14.607a1.07 1.07 0 0 0-.184.608c.003.215.071.424.198.604l3.964 5.649c.15.211.37.373.628.46s.54.095.803.024l11.505-3.13c.352-.097.64-.326.79-.63s.15-.652-.006-.954m-1.673.626L9.446 20.52a.44.44 0 0 1-.394-.08.4.4 0 0 1-.114-.162.35.35 0 0 1-.013-.191l3.487-15.365c.065-.287.497-.333.633-.066l6.457 12.614a.4.4 0 0 1 .002.36.4.4 0 0 1-.12.147.5.5 0 0 1-.175.087"
    />
  </svg>
)
export default SvgBrandPrisma
