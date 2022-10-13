import { useState } from "react";
import { Product } from "../../types/product";
import Button from "../Button";
import Input from "../Input";

import "./styles.scss";

interface FormProps {
  product?: Product | undefined;
  handleSubmit?: any;
}

const Form = (props: FormProps) => {
  const { product } = props;
  const [title, setTitle] = useState(product?.title ?? "");
  const [description, setDescription] = useState(product?.description ?? "");
  const [price, setPrice] = useState(product?.price ?? 0);
  const [discountPercentage, setDiscountPercentage] = useState(
    product?.discountPercentage ?? 0
  );
  const [rating, setRating] = useState(product?.rating ?? 0);
  const [stock, setStock] = useState(product?.stock ?? 0);
  const [brand, setBrand] = useState(product?.brand ?? "");
  const [category, setCategory] = useState(product?.category ?? "");

  return (
    <form>
      <div className="Form">
        {product?.id ? (
          <Input type="text" text="Id" readonly value={product?.id} />
        ) : (
          false
        )}

        <Input
          type="text"
          text="title"
          value={title}
          onChange={setTitle}
          required
        />

        <Input
          type="text"
          text="description"
          value={description}
          onChange={setDescription}
          required
        />

        <Input
          type="text"
          text="price"
          value={price}
          onChange={setPrice}
          required
        />

        <Input
          type="text"
          text="discountPercentage"
          value={discountPercentage}
          onChange={setDiscountPercentage}
        />

        <Input
          type="text"
          text="rating"
          value={rating}
          onChange={setRating}
          required
        />

        <Input
          type="text"
          text="stock"
          value={stock}
          onChange={setStock}
          required
        />

        <Input
          type="text"
          text="brand"
          value={brand}
          onChange={setBrand}
          required
        />

        <Input
          type="text"
          text="category"
          value={category}
          onChange={setCategory}
          required
        />
      </div>
      <div className="btn-group">
        {product?.id ? (
          <Button
            color="green"
            type="button"
            onClick={() => props.handleSubmit?.()}
          >
            Cancelar
          </Button>
        ) : (
          <Button
            color="blue"
            onClick={() =>
              props.handleSubmit?.({
                title,
                description,
                price,
                discountPercentage,
                rating,
                stock,
                brand,
                category,
              })
            }
          >
            Salvar
          </Button>
        )}
      </div>
    </form>
  );
};

export default Form;
