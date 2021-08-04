import * as React from 'react'

function FollowingTabEmptyIcon(props: any) {
  return (
    <svg width={200} height={162} fill="none" {...props}>
      <path
        d="M150 162c5.5 0 10-4.556 10-10.125V48.195c0-2.734-1.1-5.265-2.9-7.189l-37.6-38.07C117.6 1.114 115.1 0 112.4 0c-8.9 0-13.4 10.935-7.1 17.314l33.2 33.615c1 .911 1.5 2.227 1.5 3.543v97.403c0 5.569 4.5 10.125 10 10.125zm40 0c5.5 0 10-4.556 10-10.125V31.489c0-2.633-1.1-5.265-2.9-7.189l-21-21.364C174.2 1.114 171.6 0 169 0c-9 0-13.4 10.935-7.1 17.314l16.7 16.908a5.098 5.098 0 011.4 3.544v114.109c0 5.569 4.5 10.125 10 10.125zM60 111.375c5.5 0 10 4.556 10 10.125V162h40c5.5 0 10-4.556 10-10.125V64.901c0-2.733-1.1-5.265-2.9-7.188l-50-50.626a9.952 9.952 0 00-3.234-2.19 9.853 9.853 0 00-7.632 0A9.952 9.952 0 0053 7.086L3 57.713c-1.9 1.923-3 4.556-3 7.188v86.974C0 157.444 4.5 162 10 162h40v-40.5c0-5.569 4.5-10.125 10-10.125zm0-20.25c-5.5 0-10-4.556-10-10.125s4.5-10.125 10-10.125S70 75.431 70 81s-4.5 10.125-10 10.125z"
        fill="#E0E0E0"
      />
    </svg>
  )
}

const MemoFollowingTabEmptyIcon = React.memo(FollowingTabEmptyIcon)
export default MemoFollowingTabEmptyIcon