import React  , {useContext} from 'react'
import FoodCard from '../../components/FoodCard'
import { StoreContext } from '../../context/StoreContext'

const TopDishes = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div  className="max-w-6xl mx-auto  p-3 my-4 ">
    
    
        <h2 className="text-xl  font-semibold">Top Dishes Near You</h2>

           <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4  justify-center items-center '>

              {food_list.map((item )=>{

                   if(category === 'All' || category===item.category){

                     return <FoodCard key={item._id} item={item} />

                   }
             
  
                       
              })}

           </div>

    
     
    
       <hr className='bg-gray-300 mt-12 h-[2px]'/>
    </div>
  )
}

export default TopDishes