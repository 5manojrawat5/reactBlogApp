import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img src="https://images.pexels.com/photos/5096885/pexels-photo-5096885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="headerImg" />
    </div>
  )
}
