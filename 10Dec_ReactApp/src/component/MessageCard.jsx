import React from 'react'

export default function MessageCard(props) {
  return (
    <div>
      <h3>Title: {props.title}</h3>
            <h3>Message: {props.message}</h3>

    </div>
  )
}
