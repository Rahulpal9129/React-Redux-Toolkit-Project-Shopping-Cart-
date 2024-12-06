
import {Products} from '../data'

import { useSelector, useDispatch } from 'react-redux'
import {addToCart, selectCartItems} from '../redux/cartSclice'

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Product = () => {
      
     
     const disPatch = useDispatch();
     const cartItem = useSelector(selectCartItems);
     

     const handleaddTOCart = (items)=>{
        disPatch(addToCart(items))
        toast.success('Item added to cart', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
     }


        
        
  return (
    <div>
              <ToastContainer>

              </ToastContainer>




        <div className="container">
            <div className="row">
               
               {
                Products.map((items)=>(
                    <div key={items.id} className="container col-md-4 my-5">
                        <div className="card bg-dark" style={{width:'18rem'}}>
                                 <div className='p-3 d-flex justify-content-center align-items-center'>
                                <img src={items.imgSrc} className="card-img-top" alt="..." style={{
                                    width: '200px',
                                    height: '200px',
                                   borderRadius: '10px'
                                }}/>
                                </div>
                                <div className="card-body text-light text-center">
                                  <h5 className="card-title">{items.title}</h5>
                                  <p className="card-text">{items.description}</p>
                                  <button className="btn btn-primary mx-3">{items.price} ₹</button>
                                  <button className="btn btn-warning"  onClick={()=>handleaddTOCart(items)}>Add to Cart</button>
                                  
                                </div>
                        </div>
                    </div>
                ))
               }

            </div>
        </div>
    </div>
  )
}

export default Product