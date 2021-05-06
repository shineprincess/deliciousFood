import React, { useState } from 'react'
import './FoodContent.css'
import MenuInfo from './MenuInfo'
import MyItems from './MyItems'
import CategoryItmes from './CategoryItmes'

// code for list items like breakfast etc
const categoryListItems =  [...new Set (MenuInfo.map ((currEle) => {
        return currEle.category 
    } )
    ) , "all" ]

    
    console.log(categoryListItems)



const FoodContent = () => {

    const [items , setItems] = useState(MenuInfo)

    const [catList , setCatList] = useState(categoryListItems);

    

    const changeItems = (updatedItmes) => {

        if(updatedItmes === "all") {
            setItems(MenuInfo)
            return
        }

        const newItems = MenuInfo.filter((currCategoryItem) => {
            return currCategoryItem.category === updatedItmes
        })

        setItems(newItems)
        
    }

    return (
       <>

        <h1 className="heading_order">Order Your Favourite Dish</h1>
        <hr/>

            {/* My list items category */}
        <CategoryItmes changeItems = {changeItems}  catList = {catList} />

            {/* My items menu  */}
        <MyItems items= {items}/>

       </>
    )
}

export default FoodContent