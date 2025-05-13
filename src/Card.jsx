import React from "react";

const Card = React.memo(({ photo }) => {
  return (
    <div className="mb-4 break-inside-avoid">
      <img
        src={photo.src.medium}
        alt={photo.photographer}
        className="w-full rounded-lg"
      />
    </div>
  );
})

export default Card;