import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import ItemDetail from './ItemDetail/ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const queryDb = getFirestore();
            const queryDoc = doc(queryDb, 'Item', id);

            try {
                const res = await getDoc(queryDoc);
                setItem({ id: res.id, ...res.data() });
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            {loading ? <Spinner /> : <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;