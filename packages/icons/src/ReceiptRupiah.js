import * as React from 'react'
const SvgReceiptRupiah = (props) => (
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
      d="m11.632 15.078-3.632-4 1.632.035a2 2 0 0 0 0-4L8 7.078v8m5.726.422 1.215.034a2 2 0 0 0 0-4l-1.215-.034v6M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z"
    />
  </svg>
)
export default SvgReceiptRupiah
