import { useEffect, useState } from "react";

const Post = (body?: string) => {
  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body,
  })
    .then((res) => res.json())
    .then(console.log);
};

const Update = (id: string | undefined, body: string) => {
  fetch(`https://dummyjson.com/products/1`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: body,
  })
    .then((res) => res.json())
    .then(console.log);
};

const Get = (url: string) => {
  const [response, setResponse] = useState<any>();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setResponse(json));
  }, [url]);

  return response;
};

const Delete = (id: string) => {
  fetch(`https://dummyjson.com/products/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((json) => {
      console.log({ deleted: json });
    });
};

export { Post, Get, Update, Delete };
