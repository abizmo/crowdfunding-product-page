interface IconBookmarkProps extends React.SVGProps<SVGSVGElement> {}

const IconBookmark = (props: IconBookmarkProps) => (
  <svg {...props} viewBox='0 0 56 56' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd'>
      <circle
        fill='hsl(var(--bookmark-surface)'
        cx='28'
        cy='28'
        r='28'
      ></circle>
      <path
        fill='hsl(var(--bookmark-surface-foreground)'
        d='M23 19v18l5-5.058L33 37V19z'
      ></path>
    </g>
  </svg>
)

export default IconBookmark
