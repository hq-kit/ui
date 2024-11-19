import * as React from 'react'
const SvgBrandNuxt = (props) => (
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
      d="M13.22 19h7.435c.236 0 .468-.065.672-.188.204-.122.373-.299.493-.513a1.44 1.44 0 0 0 0-1.399l-4.993-9c-.12-.214-.29-.39-.493-.512a1.3 1.3 0 0 0-1.344 0 1.4 1.4 0 0 0-.492.512l-1.278 2.303L10.724 5.7c-.12-.214-.289-.39-.492-.512a1.3 1.3 0 0 0-1.345 0 1.4 1.4 0 0 0-.492.512L2.18 16.9a1.44 1.44 0 0 0-.001 1.4c.12.213.289.39.492.512.205.123.437.188.673.188H8.01c1.85 0 3.214-.846 4.152-2.494l3.497-6.303 3.663 6.6H14.44zm-5.284-2.2L4.68 16.8 9.56 8l2.436 4.4-1.63 2.94c-.624 1.07-1.331 1.46-2.43 1.46"
    />
  </svg>
)
export default SvgBrandNuxt
