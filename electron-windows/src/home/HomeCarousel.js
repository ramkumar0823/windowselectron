import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import Photo1 from "../assets/images/one.jpeg";
import Photo2 from "../assets/images/two.jpeg";
import Photo3 from "../assets/images/three.jpeg";
// import "../style/Style.css";
import axios from "axios";
const Store = require("electron-store");

const HomeCarousel = () => {
  const [datas, setDatas] = useState("hi");
  const [display, setDisplay] = useState(false);
  const store = new Store();

  const onHandleClick = async () => {
    const endpoint = "https://fakestoreapi.com/products?sort=desc";
    axios.get(endpoint).then(async (response) => {
      const data = response.data; // Extract the data from the response object
      store.set("unicorn", "🦄");
      console.log(store.get("unicorn"));

      setDatas(data);
      // saveDataInStorage(data);
      // settings.set("color", {
      //   name: "cerulean",
      //   code: {
      //     rgb: [0, 179, 230],
      //     hex: "#003BE6",
      //   },
      // });
      data.map((item) => {
        console.log(">>>", item.id);
      });
    });
  };

  return (
    <>
      <Container className="mt-5" fluid>
        <Row>
          <Col lg={8} md={10} sm={12} className="mx-auto">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={Photo1} alt="First slide" />
                <Carousel.Caption>
                  <h3>Margherita</h3>
                  <p className="d-block d-sm-block">
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Photo2}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Cheese Pizza</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Photo3} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Pepporoni</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <div className="text-center mt-3">
          <h2 style={{ color: "#FF6347" }}>Pizzas for Every Occasion!</h2>
          <p className="lead text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="mx-auto">
          <button
            type="button"
            onClick={() => {
              onHandleClick();
            }}
            class="btn btn-primary"
          >
            Primary
          </button>
          <div>
            <p>jlsbhfjhbjkgbkhvjkdfgvklfgvlkfvglikbx;kadshci</p>
          </div>
          {/* <div>
          {datas?.map((item) => {
            return <p>{item.id}</p>;
          })}
        </div> */}
        </div>
      </Container>
    </>
  );
};
export default HomeCarousel;
