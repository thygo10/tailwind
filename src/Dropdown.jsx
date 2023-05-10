import './index.css'
import { useRef } from 'react'

export default function Dropdown(){
  const dropdownRef = useRef(null)

  const handleClick = () =>{
  if(dropdownRef.current){
    dropdownRef.current.classList.toggle('hidden')
  }
}


  return (
    <>
  <div className='container mx-auto px-4 py-8 border border-gray-500 space-y-8 shadow-md hover:bg-slate-500 transition-'>
       <div>
        <h6 className='font-bold mb-2' >Componente DropDown</h6>
        <div className='relative'>
       <button className='flex items-center' onClick={handleClick}>Botao
       <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

       </button>
        <div id='btn' ref={dropdownRef} className='absolute hidden  bg-white border py-1 border-gray-300 shadow-md rounded-md w-52'>
          <a className='block w-full text-sm text-gray-500 px-3 hover:bg-slate-500 hover:text-white py-1' href="#">Link1</a>  
          <a className='block w-full text-sm text-gray-500 px-3 hover:bg-slate-500 hover:text-white py-1' href="#">Link2</a>  
          <a className='block w-full text-sm text-gray-500 px-3 hover:bg-slate-500 py-1 hover:text-white' href="#">Link3</a>  
          <a className='block w-full text-sm text-gray-500 px-3 hover:bg-slate-500 py-1 hover:text-white' href="#">Link4</a>  
          <a className='block w-full text-sm text-gray-500 px-3 hover:bg-slate-500 py-1 hover:text-white' href="#">Link5</a>  
        </div>
        </div>
      </div>
      </div>
    </>
    )
  }