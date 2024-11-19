import * as React from 'react'
const SvgNutOff = (props) => (
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
      d="M12 4V2m0 2c4 0 7.5 2 8 4 .242.97.703 1.964 2 3-1.317.157-1.968-.084-3-1m-7-6c-.74 0-1.461.068-2.15.192M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7 7 0 0 0 4.125-2.939M5 10c.54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2m-7-2c-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21M19 10v3.343M19 10c-.276.896-.669 1.33-1.556 1.787M2 2l20 20"
    />
  </svg>
)
export default SvgNutOff
