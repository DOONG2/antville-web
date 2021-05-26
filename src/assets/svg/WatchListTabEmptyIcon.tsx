import * as React from 'react'

function WatchListTabEmptyIcon(props: any) {
  return (
    <svg width={200} height={200} fill="none" {...props}>
      <path
        d="M197.281 172.914l-38.949-38.941a9.369 9.369 0 00-6.641-2.735h-6.367c10.781-13.789 17.188-31.129 17.188-49.996C162.512 36.363 126.141 0 81.258 0S0 36.363 0 81.242c0 44.879 36.371 81.242 81.258 81.242 18.867 0 36.215-6.406 50.004-17.187v6.367c0 2.5.976 4.883 2.734 6.641l38.949 38.941c3.672 3.672 9.61 3.672 13.243 0l11.054-11.055c3.672-3.671 3.672-9.605.039-13.277zM81.258 139.938c-31.07 0-58.704-27.586-58.704-58.696 0-31.066 27.59-57.93 58.704-57.93 31.07 0 58.704 26.82 58.704 57.93 0 31.067-27.591 58.696-58.704 58.696zm10.59-62.04l-17.582-5.273c-2.016-.606-3.426-2.648-3.426-4.973 0-2.84 2.07-5.152 4.61-5.152h10.98c1.78 0 3.5.504 5.007 1.453 1.266.793 2.876.746 3.957-.285l4.59-4.379c1.379-1.316 1.301-3.598-.222-4.742a22.366 22.366 0 00-12.254-4.434V43.75a3.124 3.124 0 00-3.125-3.125h-6.25a3.124 3.124 0 00-3.125 3.125v6.297c-9.23.246-16.672 8.027-16.672 17.605 0 7.801 5.074 14.77 12.336 16.95l17.582 5.273c2.015.606 3.426 2.648 3.426 4.973 0 2.84-2.07 5.152-4.61 5.152H76.094a9.36 9.36 0 01-5.008-1.453c-1.266-.793-2.875-.746-3.957.285l-4.59 4.379c-1.379 1.316-1.3 3.598.223 4.742a22.37 22.37 0 0012.254 4.434v6.363a3.124 3.124 0 003.125 3.125h6.25a3.124 3.124 0 003.125-3.125v-6.297c9.23-.246 16.672-8.023 16.672-17.605 0-7.801-5.075-14.77-12.34-16.95z"
        fill="#E0E0E0"
      />
    </svg>
  )
}

const MemoWatchListTabEmptyIcon = React.memo(WatchListTabEmptyIcon)
export default MemoWatchListTabEmptyIcon
