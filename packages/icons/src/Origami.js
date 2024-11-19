import * as React from 'react'
const SvgOrigami = (props) => (
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
      d="M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025M12 21l-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009M12.214 3.381l8.414 14.966a1 1 0 0 1-.167 1.2l-1.168 1.162a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219l-2.476-1.98a1 1 0 0 1 .631-1.782l4.165.027"
    />
  </svg>
)
export default SvgOrigami
