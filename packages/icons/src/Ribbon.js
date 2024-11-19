import * as React from 'react'
const SvgRibbon = (props) => (
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
      d="M11.99 11.22C13.002 10.002 14 9 14 8a2 2 0 1 0-4 0c0 1 1 1.997 2 3.22l-2.65 3.31M12 18l2.57-3.5M12 18l2.646 3.602a1 1 0 0 0 1.384.215l1.894-1.36a1 1 0 0 0 .203-1.43L14.57 14.5M12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422L9.35 14.53m5.22-.03c1.652-2.265 3.425-4.28 3.43-7.5 0-1.326-.632-2.598-1.757-3.536C15.117 2.527 13.59 2 12 2s-3.117.527-4.243 1.464C6.632 4.402 6 5.674 6 7c0 3.221 1.728 5.246 3.35 7.53M6.243 9.016a7 7 0 0 1 11.507-.01"
    />
  </svg>
)
export default SvgRibbon
