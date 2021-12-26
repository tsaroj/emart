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

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Latest Products</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}