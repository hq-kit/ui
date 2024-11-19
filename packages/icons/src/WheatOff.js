import * as React from 'react'
const SvgWheatOff = (props) => (
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
      d="m2 22 10-10m4-4-1.17 1.17M16 8h2a4 4 0 0 0 4-4V2h-2a4 4 0 0 0-4 4zm-9.47 9.47a3.5 3.5 0 0 0 0-4.94L5 11l-1.53 1.53a3.5 3.5 0 0 0 0 4.94L5 19m1.53-1.53L5 19m1.53-1.53a3.5 3.5 0 0 1 4.94 0L13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19M8 8l-.53.53a3.5 3.5 0 0 0 0 4.94L9 15m0 0 1.53-1.53M9 15l1.53 1.53a3.5 3.5 0 0 0 4.94 0L16 16m-5.47-2.53c.55-.55.88-1.25.98-1.97m-.98 1.97a3.5 3.5 0 0 1 1.97-.98m-1.59-7.23c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62m3.93 3.94c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28M2 2l20 20"
    />
  </svg>
)
export default SvgWheatOff
