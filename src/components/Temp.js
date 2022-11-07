import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./css/style.css";
import images from "../images.jpeg";
import Form from "react-bootstrap/Form";
const Temp = () => {
  const [srch, setSrch] = useState("Pune");
  const [city, setCity] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${srch}&units=metric&appid=f0c7c2f10559cb1dd0739396fb83be05`;
      console.log(url);
      const response = await fetch(url);
      const resJSON = await response.json();
      console.log(resJSON);
      setCity(resJSON.main);
      console.log("city", city);
    };
    fetchApi();
  }, [srch]);
  return (
    <div className="mydiv" style={{ width: "100%" }}>
      <Card className=" mycard text-white">
        <Card.Img src={images} alt="Card image" style={{ height: "200" }} />
        <Card.ImgOverlay>
          <Card.Title>
            <h1 style={{ textAlign: "center" }}> Whether App</h1>
          </Card.Title>
          <Card.Text style={{ marginTop: 20 }}>
            <Form.Control
              type="text"
              placeholder="Enter city"
              onChange={(e) => {
                setSrch(e.target.value);
              }}
            />
          </Card.Text>
          <Card.Text>
            {!city ? (
              <p>No data found</p>
            ) : (
              <div>
                <h3>
                  <i className="fa fa-street-view" aria-hidden="true"></i>
                  {srch}
                </h3>
                <h4>{city.temp} °Cel</h4>
                <h5 className="tem_min_max">
                  Min : {city.temp_max} °Cel | Max : {city.temp_min} °Cel
                </h5>
              </div>
            )}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Temp;
