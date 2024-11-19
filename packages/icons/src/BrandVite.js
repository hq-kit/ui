import * as React from 'react'
const SvgBrandVite = (props) => (
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
      d="m21.396 5.049-5.448.889L16.895 3l-7.56 1.326-.117 1.78-6.623-1.06c-.456-.023-.722.27-.534.677l9.585 15.047c.206.3.68.313.89 0l9.397-15.048c.212-.34-.113-.74-.537-.673m-9.308 15.308L2.703 5.621l6.48 1.037-.306 4.618 2.656-.549-.74 3.247 2.017-.549-1.001 4.338c-.05.284.363.435.567.029l5.9-10.54-2.912.503.396-1.229 5.534-.903z"
    />
  </svg>
)
export default SvgBrandVite
