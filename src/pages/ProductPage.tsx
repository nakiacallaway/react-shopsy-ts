import { useContext, useEffect } from 'react';
import SingleProductCard from '../components/SingleProductCard';
import { useParams, Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import '../App.css';

const ProductPage = () => {
  const { product, getSingleProduct } = useContext(GlobalContext);
  const { productId } = useParams<{ productId: string }>();

  useEffect(() => {
    getSingleProduct(+productId);
  }, [productId]);
  
  return (
    <div className='row'>
        {product ? (<SingleProductCard product={product} />) : (<h2 className='text-center'>No item was found!</h2>)}
    </div>
  );
};

export default ProductPage;
