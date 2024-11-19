import * as React from 'react'
const SvgMusicNote = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18a4 4 0 1 1-8 0 4 4 0 0 1 8 0m0 0V2s3.12-.157 4.5 1C18.206 4.43 18 8.5 18 8.5" />
  </svg>
)
export default SvgMusicNote
