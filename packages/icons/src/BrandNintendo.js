import * as React from 'react'
const SvgBrandNintendo = (props) => (
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
      d="M13.632 21h2.755C18.92 21 21 18.92 21 16.387V7.614C21 5.08 18.92 3 16.387 3h-2.812c-.055 0-.112.055-.112.112v17.775c-.001.058.056.113.169.113m3.43-9.9c1.014 0 1.8.845 1.8 1.8 0 1.013-.844 1.8-1.8 1.8-1.012 0-1.8-.787-1.8-1.8-.056-1.013.788-1.8 1.8-1.8M11.55 3H7.612C5.083 3 3 5.081 3 7.613v8.774C3 18.92 5.081 21 7.613 21h3.937c.055 0 .112-.055.112-.112V3.113c.001-.058-.056-.113-.112-.113m-1.293 16.538H7.613a3.145 3.145 0 0 1-3.151-3.15V7.611a3.145 3.145 0 0 1 3.15-3.15H10.2zM5.813 8.4c0 .957.73 1.688 1.687 1.688.956 0 1.688-.732 1.688-1.688 0-.954-.732-1.687-1.688-1.687s-1.687.732-1.687 1.687"
    />
  </svg>
)
export default SvgBrandNintendo
