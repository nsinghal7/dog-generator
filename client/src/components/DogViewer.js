import React, { Component } from "react";
import loadingImage from "../public/dog_bed.jpg";
import badImage from "../public/nik.jpg";
import { get } from "../utilities";
import "./DogViewer.css";

const { useState, useEffect } = React;

const DogViewer = (props) => {
  const [imageLink, setImageLink] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchDog = async () => {
    setLoading(true);
    const { breed } = props;

    let link;
    try {
      const response = await get(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );
      link = response.message;
    } catch {
      link = badImage;
    }

    setImageLink(link);
    setLoading(false);
  };

  useEffect(fetchDog, [props.breed, props.iteration]);

  return (
    <div className="DogViewer-wrapper">
      <img className="DogViewer-img" src={loading ? loadingImage : imageLink} />
    </div>
  );
};

export default DogViewer;
