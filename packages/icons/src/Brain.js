import * as React from 'react'
const SvgBrain = (props) => (
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
      d="M12 5a3 3 0 1 0-5.997.125M12 5v13m0-13a2.999 2.999 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77m-14.52-5.77a4 4 0 0 0-2.526 5.77m2.526-5.77A3 3 0 0 0 6.401 6.5m-2.924 4.395a4 4 0 0 0 .556 6.588m-.556-6.588q.275-.223.585-.395m-.029 6.983A4 4 0 1 0 12 18m-7.967-.517c.6.339 1.278.517 1.967.517m6 0a4.002 4.002 0 0 0 5.824 3.556 4 4 0 0 0 2.143-4.073m.556-6.588a4 4 0 0 1-.556 6.588m.556-6.588a4 4 0 0 0-.585-.395m.029 6.983c-.6.339-1.278.517-1.967.517m-3-5a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4m8.6-6.5a3 3 0 0 0 .398-1.375"
    />
  </svg>
)
export default SvgBrain
