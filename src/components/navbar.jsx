import React from 'react';

function navbar({handelClick,menuList}){
    return (
    <nav className="nav">
        <div className='btn-group'>
        {menuList.map((curElem)=>{
            return(<>
            <button onClick={()=>handelClick(curElem)} className="option">{curElem}</button>
            </>)
        })}</div>
    </nav>

);}

export default navbar;