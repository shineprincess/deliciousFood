import React from 'react'

const CategoryItmes = ({changeItems , catList} ) => {
    return (
        <>

        
            <div className="main_div">

                <div className="child_div">

                    {
                        catList.map ((curElem ,  index) => {
                            return <button className="btn btn_style" key={index} onClick = { () => changeItems( curElem )} > {curElem} </button>
                        })
                    }
                
                </div>
            </div>

        </>
    )
}

export default CategoryItmes
