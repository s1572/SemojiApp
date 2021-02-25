import React from 'react';
const Sresult = (props) =>{
 const img = `https://source.unsplash.com/400x300/?${props.name}/emoji` ;

  return(
  <>
    <div>
        <img src={img} alt="Not Found Emoji" />



   </div>

  </>
  );


};
export default Sresult;