import { HomeIcon, UserIcon,  BeakerIcon } from '@heroicons/react/20/solid'

const BottomNav = () => {
  return (
    <nav className="fixed bottom-3 left-0 w-full px-3 flex justify-center">
      <ul className="grid w-full grid-cols-4 p-2 bg-white rounded-xl shadow-xl shadow-gray-200 text-gray-700 gap-2">
        <li className='flex flex-col items-center justify-center py-2 bg-orange-400 text-white rounded-lg'>
          <HomeIcon className='h-5 w-5' />
        </li>
        <li className='flex flex-col items-center justify-center py-2 bg-gray-100 rounded-lg'>
          <UserIcon className='h-5 w-5' />
        </li>
        <li className='flex flex-col items-center justify-center py-2 bg-gray-100 rounded-lg'>
          <BeakerIcon className='h-5 w-5' />
        </li>
        <li className='flex flex-col items-center justify-center py-2 bg-gray-100 rounded-lg'>
          <BeakerIcon className='h-5 w-5' />
        </li>
      </ul>
    </nav>
  )
}

export { BottomNav }