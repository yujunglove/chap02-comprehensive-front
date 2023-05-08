import { useEffect, useState } from "react";
import PaymentCSS from "./Payment.module.css";
import { useDispatch, useSelector } from "react-redux";
import { callPurchaseListAPI } from "../../apis/PurchaseAPICalls";
import { callReviewCheckAPI } from "../../apis/ReviewAPICalls";
import ProductReviewModal from "./../../components/modal/ProductReviewModal";
import ProductReviewWriteModal from "../../components/modal/ProductReviewWriteModal";

function Payment() {
  /* 컴포넌트가 랜더링 된 직후(useEffect) PurchaseAPICalls의 callPurchaseListAPI() 메소드를 호출한다. 
  state.purchaseReducer에 저장 된 값을 가져와서 Table의 tr 하나당 하나의 구매건을 출력한다. */
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.purchaseReducer);
  const { review } = useSelector((state) => state.reviewReducer);
  const [productReviewModal, setProductReviewModal] = useState(false);
  const [productReviewWriteModal, setProductReviewWriteModal] = useState(false);
  const [productCode, setProductCode] = useState(0);

  console.log("review ", review);

  useEffect(() => {
    dispatch(callPurchaseListAPI());
  }, []);

  /* 리뷰 존재 유무에 따라 Modal 띄우기 */
  useEffect(() => {
    if (review?.reviewCode) {
      setProductReviewModal(true);
    } else if (review) {
      setProductReviewWriteModal(true);
    }
  }, [review]);

  /* 리뷰 확인 버튼 클릭 이벤트 */
  const onClickReviewHandler = (productCode) => {
    /* 해당 상품 리뷰 작성 여부 확인 */
    dispatch(callReviewCheckAPI({ productCode }));
    setProductCode(productCode);
  };
  return (
    <>
      {productReviewModal ? (
        <ProductReviewModal
          review={review}
          setProductReviewModal={setProductReviewModal}
        />
      ) : null}
      {productReviewWriteModal ? (
        <ProductReviewWriteModal
          productCode={productCode}
          setProductReviewWriteModal={setProductReviewWriteModal}
        />
      ) : null}
      <div className={PaymentCSS.paymentDiv}>
        <table className={PaymentCSS.paymentTable}>
          <colgroup>
            <col width="20%" />
            <col width="40%" />
            <col width="20%" />
            <col width="20%" />
          </colgroup>
          <thead>
            <tr>
              <th>주문일자</th>
              <th>주문 상품 정보</th>
              <th>상품금액(수량)</th>
              <th>리뷰</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((purchase) => (
                <tr key={purchase.orderCode}>
                  <td>{purchase.orderDate}</td>
                  <td>{purchase.product.productName}</td>
                  <td>
                    {purchase.product.productPrice}원 ({purchase.orderAmount}개)
                  </td>
                  <td>
                    <button
                      className={PaymentCSS.reviewWriteBtn}
                      onClick={() =>
                        onClickReviewHandler(purchase.product.productCode)
                      }
                    >
                      리뷰 확인
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Payment;
