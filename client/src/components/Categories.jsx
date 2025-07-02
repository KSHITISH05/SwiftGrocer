import React from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Categories = () => {

    const {navigate} = useAppContext()
    //Question: what is useAppContext and navigate here?

  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Categories</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6'>

        {categories.map((category, index)=>(
          //Question: how map is used here?
          //Question:what is the purpose of category and index attributes?
          //Question :what is categories and how it is used here?
            <div key={index} className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'
            // what is key property and why we are providing it index
            //why i am doing category.(some property) and what is the purpose of it?
            style={{backgroundColor: category.bgColor}}
            onClick={()=>{
                navigate(`/products/${category.path.toLowerCase()}`);
                //Question: what is navigate and why we are using it here? explain the above line
                scrollTo(0,0)
                //Question: what is scrollTo and why we are using it here?
            }}
            >
                <img src={category.image} alt={category.text} className='group-hover:scale-108 transition max-w-28'/>
                <p className='text-sm font-medium'>{category.text}</p>
            </div>
                    
        ))}

        
      </div>
    </div>
  )
}

export default Categories
