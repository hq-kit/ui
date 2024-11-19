import * as React from 'react'
const SvgAudioWaveform = (props) => (
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
      d="M2 13a2 2 0 0 0 2-2V7a2 2 0 1 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 1 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"
    />
  </svg>
)
export default SvgAudioWaveform
