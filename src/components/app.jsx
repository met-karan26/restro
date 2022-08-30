/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import Cards from './card';
import Items from '../items';
import Navbar from './navbar';

//this block helps to convert the objects into non repeting array elements which is the categories.
const uniqueList=[...new Set(Items.map((curElem)=>{
    return curElem.category;
})),"All"];
console.log(uniqueList); 
//<--------------------This block ends  here--------->

function app(){

    // eslint-disable-next-line no-unused-vars
    const[menuData,setMenuData]=useState(Items);
    // eslint-disable-next-line no-unused-vars
    const[menuList,setMenuList]=useState(uniqueList);
    
    function handelClick(category){

    if(category==="All"){
        setMenuData(Items);
        return;
    } 

        const updatedList=Items.filter((curElem)=>{
            return curElem.category===category;
            
        });
setMenuData(updatedList);
    };
    
    return <div className='container'>
   <Navbar  handelClick={handelClick} menuList={menuList}/>
    <Cards menuData={menuData} /></div>
}

export default app;