import React from "react";
import ImageCard from "./ImageCard";
import styles from "./ImageList.module.css";

export default function ImageList(props) {
  const images = props.images.map((image) => {
    return <ImageCard image={image} key={image.id} />;
  });
  return <div className={styles.imageList}>{images}</div>;
}
