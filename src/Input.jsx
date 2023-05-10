import './index.css'

function Input(){
return(
<div className='container gap-2 flex flex-col mx-auto rounded-sm max-w-min py-2 mt-2'>
  Nome
  <input type="text" 
  placeholder='Digite seu nome' 
  className='bg-slate-40 border border-slate-700 focus:border-blue-600 focus:text-blue-700 rounded-md px-2 py-1 placeholder-gray-400 text-sm text-gray-700 focus:outline-none'/>
   E-mail
  <input type="text" 
  placeholder='Digite seu e-mail' 
  className='bg-slate-40 border border-slate-700 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 focus:text-blue-700 rounded-md px-2 py-1 placeholder-gray-400 text-sm text-gray-700 focus:outline-none transition duration-300 ease-out md:ease-in'/>
</div>
)
}

export default Input