import './index.css'

function Teste(){
  return(<>
  <div className="content flex justify-center items-center bg-red-600 h-96">
  <div className='m-3 h-64 w-52 bg-slate-500 bg-[url("/assets/react.svg")]'>
      <h2 className='text-center pt-1'>Text header</h2>
      
   </div>
   <div className='m-3 h-64 flex-grow w-52 flex-shrink-0 bg-slate-500 bg-[url("/assets/react.svg")]'>
      <h2 className='text-center pt-1'>Text header</h2>
      
   </div>
   <div className='m-3 h-64 w-52 bg-slate-500 bg-[url("/assets/react.svg")]'>
      <h2 className='text-center pt-1'>Text header</h2>
      
   </div>
  </div>
   
  </>)
}

export default Teste