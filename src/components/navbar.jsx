import { useState } from "react"
import { Close, logo, Menu } from "../assets"
import { navigationLinks } from "../util/constants"
import { styles } from "../util/style"

const Navbar = () => {
  const [toggleNaw, setToggleNaw]=useState(false)
  const [active, setActive]=useState('home')

  const toggleHandler=()=>setToggleNaw(prev=>!prev)
  const activeHandler=id=>setActive(id)
  return (
    <div className={`w-full py-6 ${styles.flexBetween}`}>
        {/* Logo */}
        <img src={logo} alt="logo" className="p-0 m-0 cursor-pointer  w-[250px] h-[72px] object-contain flex" />
        {/* Navigation link */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {
            navigationLinks.map((nav, idx)=>(
              <li key={nav.id} className={`font-montserrat font-normal cursor-pointer text-[16px] text-white ${idx===navigationLinks.length -1 ? 'mr-0':'mr-10'}
              ${active===nav.id?'text-white':'text-lightWhite'}
              hover:text-lime-100 transition-all duration-500`}
              onClick={()=>activeHandler(nav.id)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))
          }
        </ul>
        {/* Navigation btn */}
        <div className={`sm:hidden flex flex-1 justify-end items-center`}>
          <button className="w-[30px] h-[30px] object-contain" onClick={toggleHandler}>
          {
            toggleNaw ? <Close/> :<Menu/>
          }
          </button>
          <div className={`${!toggleNaw ? 'hidden' : 'flex'} p-6 absolute top-20 right-0 left-0 w-full sidebar bg-black-gradient `}>
          <ul className="list-none flex justify-center items-center flex-1">
          {
            navigationLinks.map((nav, idx)=>(
              <li key={nav.id} className={`font-montserrat font-normal cursor-pointer text-[16px] text-white ${idx===navigationLinks.length -1 ? 'mr-0':'mr-10'}
              ${active===nav.id?'text-white':'text-lightWhite'}
              hover:text-lime-100 transition-all duration-500`}
              onClick={()=>activeHandler(nav.id)}
              >
                {nav.title}
              </li>
            ))
          }
        </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar