import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { Col, Row } from "react-bootstrap";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { getProductList } from "../actions/productAction";

const HomeScreen = () => {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message>{error}</Message>
      ) : products.length > 0 ? (
        <Row>
          {products.map((product) => (
            <Col lg={3} md={4} sm={6} key={product._id} className="mb-4">
              <Product product={product} />
            </Col>
          ))}
        </Row>
      ) : (
        <p>No product found</p>
      )}
    </>
  );
};

export default HomeScreen;
