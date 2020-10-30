import React from "react";

import Loader from "react-loader-spinner";

export default function LoadSpinner({ visible }) {
  return (
    <div className="loader">
      <Loader
        className="loader__spin"
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        visible={visible}
      />
    </div>
  );
}
