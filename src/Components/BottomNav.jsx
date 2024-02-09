
import { HomeIcon, ClipboardDocumentListIcon,  UserIcon } from '@heroicons/react/16/solid'
import { NavLink } from 'react-router-dom'

const BottomNav = () => {
  const activeStyle = 'flex flex-col items-center justify-center py-2 bg-orange-400 text-white rounded-lg'
  const baseStyle = 'flex flex-col items-center justify-center py-2 bg-gray-100 rounded-lg'

  return (
    <nav className="fixed bottom-3 left-0 w-full px-3 flex justify-center">
      <ul className="grid w-full grid-cols-3 p-2 bg-white rounded-xl shadow-xl shadow-gray-200 text-gray-700 gap-2">
        <NavLink to='home' className={({isActive})=> isActive ? activeStyle : baseStyle}>
          <HomeIcon className='h-5 w-5' />
        </NavLink>
        <NavLink to='rutinas' className={({isActive})=> isActive ? activeStyle : baseStyle}>
          <ClipboardDocumentListIcon className='h-5 w-5' />
        </NavLink>
        <NavLink to='profile' className={({isActive})=> isActive ? activeStyle : baseStyle}>
          <UserIcon className='h-5 w-5' />
        </NavLink>
      </ul>
    </nav>
  )
}

export { BottomNav }