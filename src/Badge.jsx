import './index.css'

function Badge(){
return(
<div className='container gap-2 '>
  <div className="inline-flex items-center  text-sm bg-green-100 hover:bg-green-500  duration-500  m-2 hm-2 px-2 py-0.5 rounded-md shadow-md text-green-800">
    Ativo
  </div>
  <div className="inline-flex items-center  text-sm bg-red-100 hover:bg-red-500  duration-500  m-2 px-2 py-0.5 rounded-md shadow-md text-red-800">
    Inativo
  </div>
  <div className="inline-flex items-center  text-sm bg-yellow-100 m-2 hover:bg-yellow-400 transition-all duration-500  px-2 py-0.5 rounded-md shadow-md text-yellow-800">
    Em progresso
  </div>
</div>)
}


export default Badge