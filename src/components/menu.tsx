import React from "react"
import { Link } from "gatsby"

const Menu = () => <div style={{
    background:"#cccccc",
    paddingTop:".2rem"
}}>
    <ul style={{
        listStyle:"none",
        display:"flex",
        justifyContent:"space-evenly"
    }}>
        <li><Link to="/">Tech Articles</Link></li>
        <li><Link to="/">Art Works</Link></li>
        <li>Web Design</li>
        <li><Link to="/about">About</Link></li>
    </ul>
</div>

export default Menu
