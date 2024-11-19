import * as React from 'react'
const SvgBrandUnity = (props) => (
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
      d="m12.7 6.22 2.861 1.645c.102.058.106.218 0 .275l-3.4 1.957a.32.32 0 0 1-.32 0l-3.4-1.957c-.104-.055-.106-.22 0-.275l2.86-1.644V3L4 7.199v8.396l2.8-1.61v-3.288c-.003-.118.135-.202.238-.138l3.4 1.955a.32.32 0 0 1 .161.276v3.91c.002.117-.136.2-.24.137L7.5 15.193l-2.8 1.609L12 21l7.3-4.198-2.799-1.61-2.86 1.645c-.102.061-.244-.018-.24-.137v-3.91c0-.117.065-.222.16-.276l3.4-1.955c.102-.062.243.016.24.138v3.288L20 15.595V7.198L12.7 3z"
    />
  </svg>
)
export default SvgBrandUnity
