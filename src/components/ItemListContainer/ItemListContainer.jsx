import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const queryDb = getFirestore();
            const queryCollection = collection(queryDb, 'Item');

            try {
                let res;
                if (id) {
                    const queryFilter = query(queryCollection, where('category', '==', id));
                    res = await getDocs(queryFilter);
                } else {
                    res = await getDocs(queryCollection);
                }

                setItem(res.docs.map((p) => ({ id: p.id, ...p.data() })));
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (isLoading) return <Spinner />;

    return (
        <div className='ItemListContainer'>
            <div className='row'>
                <ItemList item={item} />
            </div>
        </div>
    );
};

export default ItemListContainer;