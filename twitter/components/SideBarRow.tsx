import React, { SVGProps } from 'react'

interface Props{
    Icon:(props:SVGProps<SVGSVGElement>)=>JSX.Element
    title:string
}

function SideBarRow({Icon,title}:Props) {
  return (
    <div className="group flex items-center space-x-2 px-4 py-3 rounded-full transition-all duration-200 hover:bg-gray-200">
        <Icon className='h-6 w-6'/>
        <p className="group-hover:text-blue-400">{title}</p>
    </div>
  )
}

export default SideBarRow