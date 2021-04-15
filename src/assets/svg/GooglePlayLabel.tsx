import * as React from 'react'

function GooglePlayLabel(props: any) {
  return (
    <svg width={85} height={18} fill="none" {...props}>
      <path
        d="M27.094 4.704c-2.352 0-4.269 1.789-4.269 4.253 0 2.449 1.917 4.253 4.269 4.253 2.353 0 4.27-1.804 4.27-4.253-.001-2.464-1.918-4.253-4.27-4.253zm0 6.832c-1.289 0-2.4-1.063-2.4-2.578 0-1.531 1.112-2.578 2.4-2.578 1.289 0 2.4 1.047 2.4 2.578 0 1.514-1.111 2.578-2.4 2.578zM17.78 4.704c-2.352 0-4.269 1.789-4.269 4.253 0 2.449 1.917 4.253 4.269 4.253 2.353 0 4.27-1.804 4.27-4.253 0-2.464-1.917-4.253-4.27-4.253zm0 6.832c-1.289 0-2.4-1.063-2.4-2.578 0-1.531 1.112-2.578 2.4-2.578 1.289 0 2.4 1.047 2.4 2.578.001 1.514-1.111 2.578-2.4 2.578zM6.702 6.01v1.804h4.318c-.129 1.015-.467 1.756-.983 2.271-.628.628-1.611 1.321-3.335 1.321-2.658 0-4.736-2.143-4.736-4.801 0-2.658 2.078-4.801 4.736-4.801 1.434 0 2.481.564 3.254 1.289l1.273-1.273C10.149.789 8.716 0 6.702 0 3.061 0 0 2.964 0 6.605c0 3.641 3.061 6.605 6.702 6.605 1.965 0 3.448-.645 4.607-1.853 1.192-1.192 1.563-2.868 1.563-4.221 0-.418-.032-.805-.097-1.127H6.702v.001zM52.01 7.411c-.354-.95-1.434-2.707-3.641-2.707-2.191 0-4.012 1.724-4.012 4.253 0 2.384 1.805 4.253 4.221 4.253 1.949 0 3.077-1.192 3.545-1.885l-1.45-.967c-.483.709-1.144 1.176-2.095 1.176-.95 0-1.627-.435-2.062-1.289l5.687-2.352-.193-.482zm-5.8 1.418c-.048-1.644 1.273-2.481 2.224-2.481.741 0 1.369.371 1.579.902L46.21 8.829zm-4.623 4.124h1.868V.452h-1.868v12.501zm-3.062-7.298h-.064c-.419-.5-1.225-.951-2.239-.951-2.127 0-4.076 1.869-4.076 4.27 0 2.384 1.949 4.237 4.076 4.237 1.015 0 1.82-.451 2.239-.966h.064v.612c0 1.627-.87 2.497-2.271 2.497-1.144 0-1.853-.821-2.143-1.514l-1.627.677c.467 1.127 1.707 2.513 3.77 2.513 2.191 0 4.044-1.289 4.044-4.431V4.963h-1.772v.692h-.001zm-2.142 5.881c-1.289 0-2.368-1.08-2.368-2.562 0-1.499 1.079-2.594 2.368-2.594 1.272 0 2.271 1.095 2.271 2.594 0 1.482-.999 2.562-2.271 2.562zM60.764.452h-4.471v12.501h1.865V8.217h2.605c2.068 0 4.102-1.497 4.102-3.882S62.832.452 60.764.452zm.048 6.025h-2.654V2.192h2.654c1.395 0 2.187 1.155 2.187 2.143 0 .968-.792 2.142-2.187 2.142zm11.532-1.795c-1.351 0-2.75.595-3.329 1.914l1.656.691c.354-.691 1.014-.917 1.705-.917.965 0 1.946.579 1.962 1.608v.129c-.338-.193-1.062-.482-1.946-.482-1.785 0-3.603.981-3.603 2.814 0 1.673 1.464 2.75 3.104 2.75 1.254 0 1.946-.563 2.38-1.223h.064v.965h1.802V8.138c.001-2.218-1.657-3.456-3.795-3.456zm-.226 6.851c-.61 0-1.463-.306-1.463-1.062 0-.965 1.062-1.335 1.979-1.335.819 0 1.206.177 1.704.418a2.262 2.262 0 01-2.22 1.979zm10.583-6.578l-2.139 5.42h-.064l-2.22-5.42h-2.01l3.329 7.575-1.898 4.214h1.946l5.131-11.789h-2.075zm-16.806 7.998h1.865V.452h-1.865v12.501z"
        fill="#1942E0"
      />
    </svg>
  )
}

const MemoGooglePlayLabel = React.memo(GooglePlayLabel)
export default MemoGooglePlayLabel
