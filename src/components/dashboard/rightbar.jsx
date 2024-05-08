import React from "react";

class Rightbar extends React.Component{
    render(){
    return (
        
        <>
            <right class= "w-full h-screen bg-gray-200">
                <div class=" w-full h-20  text-2xl font-semibold  text-black bg-gray-200 flex items-center">
                   DASHBOARD
                </div>

                <div class=" w-full h-96 bg-gray-200 flex items-center justify-around">
                    <div class=" w-80 h-64 bg-gray-400 ">
                       number of USERS
                    </div>
                    <div class=" w-80 h-64 bg-gray-400 ">
                        number of Products
                    </div>

                </div>
            </right>





      
        </>
    );
  }
}
  
  export default Rightbar;