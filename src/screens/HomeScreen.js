//import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

import Message from "../components/Message";
import Loader from "../components/Loader";

//use for redux logic
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListProducts } from "../action/productAction";

//products data collect from backend
const HomeScreen = () => {
  //use redux logic
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(ListProducts());
  }, [dispatch]);

  /*
  //use simple js logic
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
*/
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default HomeScreen;
