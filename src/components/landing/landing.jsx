import React from "react";
import button from '../landing/img/button.png'
import './landing.css';


class Home extends React.Component{
    render(){
    return (
    
        <>


<div className='w-screen h-screen'>
    <div className="image bg-cover bg-center bg-no-repeat h-full w-full">
        <div className="container mx-auto flex flex-col justify-center h-full">
            <div className='mx-auto lg:mx-0 w-10/12 lg:w-2/5 text-center'>
                <h1 className="text-6xl lg:text-7xl mb-4  overflow-hidden text-white"><span className='text-white'>Let’s talk</span> about your next trip!</h1>
                <p className="text-lg lg:text-2xl mb-8 text-white">Share your favorite travel destination and we will feature it in our next blog!</p>
                <div className='flex justify-center items-center'>
                    <button className='rounded px-8 lg:px-10 py-3 text-white bg-violet-500 hover:bg-violet-600 mr-2 lg:mr-4'>Share your story</button>
                    <img className='w-8 lg:w-auto' src={button} alt="icon1" />
                    <p className='text-sm lg:text-base ml-2 text-blue-400'>Watch highlights</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="flex">
           <div class="h-56 w-56 bg-gray-900 text-white text-3xl ">product</div>
           <div class="h-56 w-56 bg-gray-900 text-white text-3xl ">product</div>
           <div class="h-56 w-56 bg-gray-900 text-white text-3xl ">product</div>
           </div>
        </>
    );
  }
}
  
  export default Home;