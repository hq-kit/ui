import * as React from 'react'
const SvgBrandGooglePlay = (props) => (
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
      d="M3.91 2.013c.372-.048.75.035 1.067.233l10.846 6.15-2.745 2.77zm-.835.833A2 2 0 0 0 3 3.403v17.192q-.003.285.075.557L12.252 12zm10.012 9.985L3.91 21.985c.372.052.751-.03 1.067-.233l10.846-6.15zm7.108-1.947L16.908 9.02 13.904 12l2.995 2.987 3.288-1.864c1.084-.615 1.084-1.63 0-2.246z"
    />
  </svg>
)
export default SvgBrandGooglePlay
