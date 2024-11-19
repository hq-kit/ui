import * as React from 'react'
const SvgBrandArch = (props) => (
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
      d="M12 3c-.801 1.962-1.287 3.249-2.178 5.157.549.576 1.215 1.251 2.304 2.016-1.17-.486-1.971-.963-2.565-1.467C8.4 11.1 6.627 14.475 3 21c2.853-1.647 5.067-2.664 7.128-3.051a4.9 4.9 0 0 1-.135-1.224v-.09c.045-1.827.999-3.231 2.124-3.132 1.125.09 1.998 1.647 1.953 3.483a5.6 5.6 0 0 1-.108.981c2.034.396 4.221 1.404 7.038 3.033a525 525 0 0 1-1.521-2.817c-.729-.576-1.53-1.332-3.114-2.133 1.089.27 1.872.594 2.484.963C14.034 8.058 13.647 6.87 12 3"
    />
  </svg>
)
export default SvgBrandArch
