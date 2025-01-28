
import './navbar.css'

export default function Nav()
{

    return (


        <div className="navBar">
              
              <div className="logo"> <a href=""><img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/to-do-list-4636695-3840537.png?f=webp&w=256" alt="" height={90} /></a></div>


              <div className='navText'>
                  <h1 style={{color:"white"}}> Prioritize Your Tasks</h1>
              </div>

              <div className="navLinks">
                  <ul className='ull'>
                    <li><a href="">todoList</a></li>
                    <li><a href="">Login</a></li>
                  </ul>
              </div>
        </div>
    )
}