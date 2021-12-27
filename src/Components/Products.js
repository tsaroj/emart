import React, { useState, useEffect } from 'react'

export const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let compoundMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (compoundMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                compoundMounted = false;
            }
        }
        getProducts();

    }, [])


    const Loading = () => {
        return (
            <>
                Loading....
            </>
        )
    }

    const ShowProducts = () => {
        return (
            <>
                <div className='buttons'>
                    <button className='btn btn-outline-dark  me-2'>All</button>
                    <button className='btn btn-outline-dark me-2'>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2'>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-2'>Jewelery</button>
                    <button className='btn btn-outline-dark me-2'>Electronics</button>
                </ div>
            </>

        )
    }


    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}
