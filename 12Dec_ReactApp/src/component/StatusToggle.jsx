import React, { useEffect, useState } from 'react'

export default function StatusToggle() {
    const [toggle,setToggle]=useState(false);
    const [isRed,setIsRed]=useState(true);
   

  return (
    <>
        <p>Status is: {toggle?"true":"false"}</p>
     <button onClick={()=>setToggle(!toggle)}>Toggle Here</button> 

    <div style={{backgroundColor:isRed?"red":"skyblue",border:"3px solid black", width:"600px",margin:"4px"}}>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quia harum sapiente facilis optio libero nobis eveniet, veritatis reprehenderit atque quam nesciunt perspiciatis eos officia architecto in tempore adipisci aut.
Ratione sunt autem mollitia aut deleniti, accusantium reiciendis alias possimus architecto harum iste commodi animi! Molestias, eius accusantium ea sequi error aperiam nemo optio saepe reiciendis voluptate excepturi recusandae quas.
Dolorum aspernatur eaque esse nulla enim accusantium est alias quas. Dicta magnam, aspernatur omnis exercitationem laborum aperiam voluptas numquam nam impedit ut, nulla reprehenderit eos nostrum, esse mollitia debitis ex?
Similique reiciendis maiores doloremque nesciunt ex perspiciatis sed accusantium tempora quod. Totam voluptas aliquid quo saepe placeat voluptatum enim minus fuga, est ipsum dolorum nemo id! Accusantium itaque perferendis soluta.
    </div>
         <button onClick={()=>setIsRed(!isRed)}>Change Color Here</button> 

    </>
  )
}
