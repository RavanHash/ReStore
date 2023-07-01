import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import {Typography} from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts((prevSate) => [
      ...prevSate,
      {
        id: prevSate.length + 101,
        name: "C" + (prevSate.length + 1),
        price: prevSate.length * 100,
        brand: "smth",
        description: "smth",
        pictureUrl: "http://picsum.photos/200",
      },
    ]);
  }

  return (
    <>
      <Typography variant="h1">Re-Store</Typography>
      <Catalog products={products} addProduct={addProduct}/>
    </>
  );
}

export default App;
