import Form from "../../components/Form";
import Title from "../../components/Title";
import { Post } from "../../helpers/api";
import { Product } from "../../types/product";

import "./styles.scss";

const ProductCreate = () => {
  function SaveProduct(product: Product) {
    const body = JSON.stringify(product);
    const result = Post(body);
  }
  return (
    <>
      <Title text="Cadastrar Produto" />
      <div className="ProductCreate">
        <Form handleSubmit={SaveProduct} />
      </div>
    </>
  );
};

export default ProductCreate;
