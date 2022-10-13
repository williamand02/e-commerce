import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form";
import Title from "../../components/Title";
import { Get, Update } from "../../helpers/api";
import { Product } from "../../types/product";

import "./styles.scss";

const ProductUpdate = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Product>();

  const { id } = useParams();
  const url = `https://dummyjson.com/products/${id}`;
  const result: Product = Get(url);

  useEffect(() => {
    setData(result);
  }, [result]);

  const UpdateProduct = (product: Product) => {
    const body = JSON.stringify(product);
    const result = Update(id, body);
    console.log({ atualizado: result });
  };

  return (
    <>
      <Title text="Atualizar Produto" />
      <div className="ProductUpdate">
        {data && <Form product={data} handleSubmit={() => navigate(-1)} />}
      </div>
    </>
  );
};

export default ProductUpdate;
