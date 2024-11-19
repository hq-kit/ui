import * as React from 'react'
const SvgBrandVue = (props) => (
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
    <path fill="currentColor" d="M22 3h-8.283L12 6.075 10.283 3H2l10 18zM12 13.802 6.3 3.537h3.692L12 7.157l2.008-3.62H17.7z" />
  </svg>
)
export default SvgBrandVue
