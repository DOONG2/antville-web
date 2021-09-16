import * as React from 'react'

function QRCode(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={174} height={174} fill="none" {...props}>
      <path fill="url(#QRCode0)" d="M0 0h174v174H0z" />
      <defs>
        <pattern
          id="QRCode0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#QRCode1" transform="scale(.00599)" />
        </pattern>
        <image
          id="QRCode1"
          width={167}
          height={167}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

const MemoQRCode = React.memo(QRCode)
export default MemoQRCode
