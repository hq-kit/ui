import * as React from 'react'
const SvgBrandSublimeText = (props) => (
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
      d="M20.72 3.003a.5.5 0 0 0-.175.012L3.451 7.19a.63.63 0 0 0-.392.298.25.25 0 0 0-.058.165v4.295a.25.25 0 0 0 .058.165.63.63 0 0 0 .392.297l7.261 1.773-7.261 1.773c-.248.06-.451.28-.451.491v4.266c0 .212.203.333.451.272l17.096-4.174c.23-.056.415-.252.44-.45.003-.016.013-.03.013-.048v-4.267c0-.21-.203-.431-.451-.492l-7.186-1.754 7.184-1.755c.248-.06.45-.281.45-.492V3.288c0-.159-.114-.267-.276-.285"
    />
  </svg>
)
export default SvgBrandSublimeText
