
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'


const Home = () => {
    const [search,setsearch]=useState('');
    const [foodcat, setfoodcat] = useState([]);
    const [fooditem, setfooditem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:3001/api/foodData",
            {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'

                }
            });
        response = await response.json();
        setfooditem(response[0])
        setfoodcat(response[1])

        // console.log(response[0],response[1]);
    }

    useEffect(() => {
        loadData()
    }, [])
    return (
        <>
            <div ><Navbar /></div>
           
            <div className='bg-dark p-5'>
                <div >
                    <div className="d-flex justify-content-center p-5  ">
                        <input className="form-control me-2 w-50  text-center" type="search" placeholder="Search" aria-label="Search" value={search}  onChange={(e)=>{setsearch(e.target.value)}}/>
                     
                    </div>
                </div>
            </div>

            <div className=" p-5 bg-dark">
                {
                    foodcat !== []
                        ? foodcat.map((data) => {
                            return (<div className='row ml-auto  text-light ' key={data._id}><h2>{data.CategoryName}</h2>
                                <hr />
                                {
                                    fooditem !== []
                                        ? fooditem.filter((item) => (item.CategoryName === data.CategoryName)&&(item.name.toLowerCase().includes(search.toLocaleLowerCase())) ).map(filteritems => {
                                            return (
                                                <div key={filteritems._id} className='col-12 col-md-6 col-lg-4'><Card fooditem={filteritems}options={filteritems.options[0]} /></div>
                                            )
                                        }) : alert("NO ITEM")

                                }
                            </div>)
                        })
                        : alert("NO DATA")

                }

            </div>
            <div><Footer /></div>
        </>
    )
}

export default Home