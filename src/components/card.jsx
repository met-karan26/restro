import React from 'react';

function card({menuData}){

    return (<div className="container">
    {menuData.map((curElem)=>{
        const{ id,name,category,pic,description}=curElem;
    return(
        <div className='card'>
    <div className="count">{id}</div>
    <div className="meal">{category}</div>
    <h1>{name}</h1>
    <p className='note'>{description}</p>
    <div className='line'><hr/><span className='read'>READ</span></div>
    <figure><img className="pic"src={pic} alt="Dishpic"></img><figcaption>Order Now</figcaption></figure>
    </div> );})}
</div>);
}

export default card;