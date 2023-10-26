import { AiOutlineRollback } from "react-icons/ai"
import { BiHomeSmile, BiUser } from "react-icons/bi"
import {HiOutlineChatBubbleBottomCenterText} from "react-icons/hi"
import {FiShoppingCart,FiSettings} from "react-icons/fi"
import { useRef, useState } from "react"
import {GiHamburgerMenu} from "react-icons/gi"














const Sidebar = ({open,setOpen}) => {
    const items = [
        { title: 'Home', Icon: BiHomeSmile, href: '#' },
        { title: 'About', Icon: BiUser },
        { title: 'Contact', Icon: HiOutlineChatBubbleBottomCenterText, href: '#' },
        { title: 'Settings', Icon: FiSettings, href: '#' },
        { title: 'Shop', Icon: FiShoppingCart, href: '#' },
      ]
    // const [open, setOpen] = useState(false)
    const ref = useRef(null)
    // useClickAway(ref, () => setOpen(false))
    const toggleSidebar = () => setOpen(prev => !prev)
  
    return (
      <>

       

        {open && (
          <>
            <div
              aria-hidden="true"
              className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"
            ></div>
            <div
              className="fixed top-0 bottom-0 left-0 z-50 w-full h-screen max-w-xs border-r-2 border-zinc-800 bg-zinc-900"
              ref={ref}
              aria-label="Sidebar"
            >
              <div className="flex items-center justify-between p-5 border-b-2 border-zinc-800">
                <span>Welcome</span>
                <button
                  onClick={toggleSidebar}
                  className="p-3 border-2 border-zinc-800 rounded-xl"
                  aria-label="close sidebar"
                >
                  <AiOutlineRollback />
                </button>
              </div>

              {/* <ul>
                {items.map((item, idx) => {
                  const { title, href, Icon } = item
                  return (
                    <li key={title}>
                      <a
                        onClick={toggleSidebar}
                        href={href}
                        className="flex items-center justify-between gap-5 p-5 transition-all border-b-2 hover:bg-zinc-900 border-zinc-800"
                      >
                        <span>{title}</span>
                        <div>
                          <Icon className="text-2xl" />
                        </div>
                      </a>
                    </li>
                  )
                })}
              </ul> */}

            </div>
          </>
        )}
      </>
    )
  }
  

  export default Sidebar