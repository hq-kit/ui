import * as React from 'react'
const SvgBrandNetflix = (props) => (
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
      d="M5 2v.005l8.219 19.663c2.308.049 4.775.332 4.779.332-2.757-6.603-5.832-13.956-8.356-20zm8.358 0v8.025l4.64 11.1c-.042-6.55-.004-13.26.002-19.124zM5 2.875V22a61 61 0 0 1 4.642-.332v-7.683z"
    />
  </svg>
)
export default SvgBrandNetflix
