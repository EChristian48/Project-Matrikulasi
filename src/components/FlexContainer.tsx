import * as React from 'react'
import { type } from 'os'

type VerticalContainerProps = {
  className: string
}

const VerticalContainer: React.FC<VerticalContainerProps> = props => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${props.className}`}
    >
      {props.children}
    </div>
  )
}

export { VerticalContainer }
