import * as React from 'react'
const SvgBrandGithub = (props) => (
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
      d="M12 3c4.973 0 9 4.13 9 9.227a9.4 9.4 0 0 1-1.693 5.389 9.04 9.04 0 0 1-4.439 3.366c-.45.093-.618-.195-.618-.438 0-.31.01-1.303.01-2.538 0-.864-.28-1.418-.607-1.707 2.004-.23 4.107-1.015 4.107-4.555 0-1.015-.348-1.835-.923-2.48.09-.231.406-1.177-.09-2.446 0 0-.753-.253-2.474.946a8.2 8.2 0 0 0-2.25-.31c-.765 0-1.53.102-2.25.31-1.722-1.187-2.475-.946-2.475-.946-.495 1.27-.18 2.215-.09 2.446-.575.645-.923 1.476-.923 2.48 0 3.53 2.092 4.325 4.095 4.555-.258.231-.495.635-.573 1.235-.518.242-1.812.634-2.622-.761-.17-.277-.675-.958-1.384-.946-.753.011-.304.438.011.61.383.22.821 1.039.923 1.305.18.518.765 1.51 3.026 1.084 0 .772.012 1.5.012 1.718 0 .243-.17.52-.62.438a9 9 0 0 1-4.456-3.357A9.38 9.38 0 0 1 3 12.228C3 7.13 7.028 3 12 3"
    />
  </svg>
)
export default SvgBrandGithub
