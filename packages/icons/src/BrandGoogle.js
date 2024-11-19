import * as React from 'react'
const SvgBrandGoogle = (props) => (
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
    <path fill="currentColor" d="M21 12.204a10 10 0 0 0-.167-1.84h-8.65v3.486h4.943a4.1 4.1 0 0 1-.64 1.539 4.2 4.2 0 0 1-1.206 1.169v2.266h2.981c1.737-1.572 2.739-3.88 2.739-6.62" />
    <path fill="currentColor" d="M12.183 21c2.48 0 4.56-.801 6.078-2.176l-2.98-2.266c-.819.54-1.862.866-3.098.866-2.388 0-4.418-1.578-5.143-3.706H3.984v2.324C5.495 18.98 8.593 21 12.183 21" />
    <path fill="currentColor" d="M7.04 13.71A5.3 5.3 0 0 1 6.75 12c0-.598.108-1.17.292-1.71V7.966H3.985a8.746 8.746 0 0 0 0 8.068l2.379-1.816z" />
    <path fill="currentColor" d="M12.183 6.584c1.353 0 2.555.458 3.514 1.34l2.63-2.576C16.734 3.892 14.662 3 12.183 3a9.19 9.19 0 0 0-8.198 4.966l3.055 2.324c.725-2.128 2.756-3.706 5.144-3.706" />
  </svg>
)
export default SvgBrandGoogle
