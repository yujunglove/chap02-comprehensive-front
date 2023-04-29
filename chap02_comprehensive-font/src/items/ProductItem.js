import ProductCSS from './ProductItem.module.css';

function ProductItem({product : {productCode, productImgUrl, productName, productPrice}}) {

    return (
        <div className={ ProductCSS.productDiv}>
            <img src={ productImgUrl} alt={ productName}/>
            <h5>{ productName}</h5>
            <h5>{ productPrice}</h5>
        </div>
    )

}

export default ProductItem;