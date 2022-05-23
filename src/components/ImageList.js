import React from "react";

export default function ImageList(props) {
  const images = props.images.map(({ description, id, urls }) => {
    return (
      <div key={id}>
        <img
          alt="items"
          style={{ width: "auto", height: "10rem" }}
          src={urls.regular}
        />
        <p>{description}</p>
      </div>
    );
  });
  return <div>{images}</div>;
}
