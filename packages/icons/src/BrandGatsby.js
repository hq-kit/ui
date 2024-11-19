import * as React from 'react'
const SvgBrandGatsby = (props) => (
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
      d="M12 3a9 9 0 1 1 0 18.001A9 9 0 0 1 12 3m0 1.8a7.205 7.205 0 0 0-6.975 5.4l8.775 8.775A7.205 7.205 0 0 0 19.2 12h-4.725v1.35h3.105a5.73 5.73 0 0 1-3.501 3.996L6.654 9.921C7.5 7.779 9.57 6.267 12 6.267c1.917 0 3.6.936 4.662 2.385l1.107-.954A7.16 7.16 0 0 0 12 4.8M4.8 12a7.2 7.2 0 0 0 7.2 7.2c.036 0 .081 0-7.2-7.2"
    />
  </svg>
)
export default SvgBrandGatsby
