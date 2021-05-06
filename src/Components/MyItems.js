import React from 'react'

const MyItems = (props) => {
    return (
        <>
            <div className="menu-items container-fluid ">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            
                            {
                                props.items.map((elem) => {
                                    const { id, name, image, description, price } = elem;

                                    return (
                                    
                                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5" key={id}>
                                            <div className="row Item-inside">
                                                {/* for images */}
                                                <div className="main__div">
                                                    <div className="box">
                                                    
                                                    <div className="second_div">
                                                    <div className="image_style">
                                                        <img src= {image} alt=""  />
                                                        </div>


                                                        <div className="flex_div">
                                                        <div className="right_div">
                                                            <h1>{name}</h1>
                                                            <p> {description} </p>
                                                        </div>

                                                        <div className="price_div">
                                                            <h2> {price} </h2>
                                                            <a href="https://www.facebook.com/priyanka.dhongde.7" > <button className="btn_dec">Order Now</button> </a>
                                                        </div>

                                                        <p className="end_p">Hurry up while still hesitating</p>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                             
                        </div>
                    </div>
                </div>
            </div>
        
        
        </>
    )
}

export default MyItems
