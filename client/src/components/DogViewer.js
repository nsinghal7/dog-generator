import React, { Component, useEffect, useState } from "react";
import loadingImage from "../public/dog_bed.jpg";
import badImage1 from "../public/claire.jpg";
import badImage2 from "../public/daniel.jpg";
import { get } from "../utilities";
import "./DogViewer.css";

const DogViewer = (props) => {
  const [imageLink, setImageLink] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchDog = async () => {
    const { breed } = props;

    let link;
    try {
      const response = await get(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );
      link = response.message;
    } catch {
      link = (Math.random() < 0.5) ? badImage1 : badImage2;
    }

    setImageLink(link);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchDog();
  }, [props.breed, props.iteration])

  return (
    <div className="DogViewer-wrapper">
      <img
        className="DogViewer-img"
        src={loading ? loadingImage : imageLink}
      />
    </div>
  );
}

export default DogViewer;
