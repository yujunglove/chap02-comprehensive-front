import { useState } from "react";
import ProductReviewModalCSS from "./ProductReviewModal.module.css";

function ProductReviewWriteModal({ productCode, setProductReviewWriteModal }) {
  const [form, setForm] = useState({ product: { productCode } });

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  console.log("form : ", form);

  const onClickProductReviewHandler = () => {};

  return (
    <div className={ProductReviewModalCSS.modal}>
      <div className={ProductReviewModalCSS.modalContainer}>
        <div className={ProductReviewModalCSS.productReviewModalDiv}>
          <h1>리뷰</h1>
          <input
            type="text"
            name="reviewTitle"
            placeholder="리뷰 제목"
            onChange={onChangeHandler}
          />
          <textarea
            placeholder="리뷰 본문"
            name="reviewContent"
            onChange={onChangeHandler}
          ></textarea>
          <button onClick={onClickProductReviewHandler}>리뷰 작성하기</button>
          <button
            style={{
              border: "none",
              margin: 0,
              fontSize: "10px",
              height: "10px",
            }}
            onClick={() => setProductReviewWriteModal(false)}
          >
            돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductReviewWriteModal;
