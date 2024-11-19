import * as React from 'react'
const SvgPalette = (props) => (
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
    <path fill="currentColor" d="M13.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M17.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M6.5 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M17.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M6.5 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2"
    />
  </svg>
)
export default SvgPalette
