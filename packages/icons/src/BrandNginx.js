import * as React from 'react'
const SvgBrandNginx = (props) => (
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
      d="M12 3 4 7.5v9l8 4.5 8-4.5v-9zm4.618 12.443c0 .528-.498.967-1.177.967-.486 0-1.04-.191-1.386-.607l-4.618-5.356v4.995a.97.97 0 0 1-.98.967h-.059a.987.987 0 0 1-.993-.967V8.557c0-.528.485-.967 1.155-.967.497 0 1.062.191 1.408.607l4.595 5.356V8.557c0-.54.461-.967.993-.967h.057c.554 0 .993.45.993.967v6.886z"
    />
  </svg>
)
export default SvgBrandNginx
