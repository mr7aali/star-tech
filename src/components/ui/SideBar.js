import { useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useClickAway } from 'react-use'
import { AiOutlineRollback } from 'react-icons/ai'
import { BiHomeSmile, BiUser } from 'react-icons/bi'
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
import { FiSettings, FiShoppingCart } from 'react-icons/fi'
import { DesktopOutlined, LaptopOutlined, MobileOutlined, ReconciliationOutlined } from '@ant-design/icons'

const Sidebar = ({ open, setOpen }) => {
  //   const [] = useState(false)
  const ref = useRef(null)
  useClickAway(ref, () => setOpen(false))
  const toggleSidebar = () => setOpen(prev => !prev)

  return (
    <div >
      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <>
            <motion.div
              {...framerSidebarBackground}
              aria-hidden="true"
              // bg-[rgba(0,0,0,0.1)]

              className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"
            ></motion.div>
            <motion.div
              {...framerSidebarPanel}

              className="fixed bg-slate-100 top-0 bottom-0 left-0 z-50 w-full h-screen max-w-xs border-r-2"//
              // bg-zinc-900
              ref={ref}
              aria-label="Sidebar"
            >
              <div className="flex items-center justify-between p-5 border-b-2 "> {/* border-zinc-800 */}
                <span>Welcome</span>
                <button
                  onClick={toggleSidebar}
                  className="p-3 border-2 rounded-md"
                  // border-zinc-800
                  aria-label="close sidebar"
                >
                  <AiOutlineRollback />
                </button>
              </div>
              <ul style={{overflow:"scroll"}} className='px-2'>
                {items.map((item, idx) => {
                  const { title, href, Icon } = item
                  return (
                    <li key={title}>
                      <a
                        onClick={toggleSidebar}
                        href={href}

                        className="flex items-center justify-between gap-5 px-5 py-2 transition-all border-b-2 hover:text-[#ef4a23]"
                      // border-zinc-800
                      >
                        <motion.span {...framerText(idx)}>{title}</motion.span>
                        <motion.div {...framerIcon}>
                          <Icon className="text-2xl" />
                          {/* {Icon} */}
                        </motion.div>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Sidebar;




// const items = [
//   { title: 'Home', Icon: BiHomeSmile, href: '#' },
//   { title: 'About', Icon: BiUser },
//   { title: 'Contact', Icon: HiOutlineChatBubbleBottomCenterText, href: '#' },
//   { title: 'Settings', Icon: FiSettings, href: '#' },
//   { title: 'Shop', Icon: FiShoppingCart, href: '#' },
// ]
const items = [
  { title: "Desktop", Icon: DesktopOutlined , href: "#" },
  { title: "Laptop", Icon: LaptopOutlined , href: "#" },
  { title: "Component", Icon: ReconciliationOutlined , href: "#" },
  { title: "Monitor", Icon: MobileOutlined , href: "#" },
  { title: "UPS", Icon: MobileOutlined , href: "#" },
  { title: "Phone", Icon: MobileOutlined , href: "#" },
  { title: "Tablet", Icon: MobileOutlined , href: "#" },
  { title: "Office Equipment", Icon: MobileOutlined , href: "#" },
  { title: "Camera", Icon: MobileOutlined , href: "#" },
  { title: "Security", Icon: MobileOutlined , href: "#" },
  { title: "Networking", Icon: MobileOutlined , href: "#" },
  { title: "Software", Icon: MobileOutlined , href: "#" },
  { title: "Server & Storage", Icon: MobileOutlined , href: "#" },
  { title: "Accessories", Icon: MobileOutlined , href: "#" },
  { title: "Gadget", Icon: MobileOutlined , href: "#" },
  { title: "Gaming", Icon: MobileOutlined , href: "#" },
  { title: "TV", Icon: MobileOutlined , href: "#" },
  { title: "AC", Icon: MobileOutlined , href: "#" },
]

const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
}

const framerSidebarPanel = {
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '-100%' },
  transition: { duration: 0.3 },
}

const framerText = delay => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  }
}

const framerIcon = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
    type: 'spring',
    stiffness: 260,
    damping: 20,
    delay: 1.5,
  },
}


