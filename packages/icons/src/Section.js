import * as React from 'react'
const SvgSection = (props) => (
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
      d="M16 5c0-.796-.421-1.559-1.172-2.121S13.061 2 12 2s-2.078.316-2.828.879S8 4.204 8 5c0 4 8 3 8 7m0 0c0 .796-.421 1.559-1.172 2.121S13.061 15 12 15s-2.078-.316-2.828-.879S8 12.796 8 12m8 0c0-.796-.421-1.559-1.172-2.121S13.061 9 12 9s-2.078.316-2.828.879S8 11.204 8 12m0 0c0 4 8 3 8 7 0 .796-.421 1.559-1.172 2.121S13.061 22 12 22s-2.078-.316-2.828-.879S8 19.796 8 19"
    />
  </svg>
)
export default SvgSection
