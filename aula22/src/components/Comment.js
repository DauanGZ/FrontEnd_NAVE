import '../styles/components/Comment.css'

export default function Comment (props) {
  return (
    <div className="comment">
      <p className="name">{props.name}</p>
      <p className="comment">{props.comment}</p>
      <p className="email">{props.email}</p>
    </div>
  )
}