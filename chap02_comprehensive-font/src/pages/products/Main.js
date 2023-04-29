import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callProductListAPI } from "../../apis/ProductAPICalls";
import ProductList from "../../lists/ProductList";

function Main() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer);
    const productList = products.data;
    console.log('productList', productList);

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(
        () => {
            dispatch(callProductListAPI({ currentPage }));
        },
        [currentPage]
    );

    return (
        <>
            <div>
                { productList && <ProductList productList={productList} /> }
            </div>
            <div>페이징바영역</div>
        </>
    );
}

export default Main;