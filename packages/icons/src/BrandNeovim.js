import * as React from 'react'
const SvgBrandNeovim = (props) => (
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
      d="M3 6.716v10.21L8.004 21V10.736L4.01 5.884zM7.597 20.2l-4.19-3.411V6.852l.542-.447 3.648 4.431zM21 16.858l-.793.703-3.9-4.783V3l4.662 3.819zM7.798 3l11.954 14.876-3.345 2.728L4.447 5.762z"
    />
  </svg>
)
export default SvgBrandNeovim
