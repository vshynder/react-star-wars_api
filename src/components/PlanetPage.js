import React from "react";

import { withRouter, useLocation } from "react-router";

function PlanetPage() {
  const location = useLocation();
  return <div>You are on planet {location.state.planet.name}</div>;
}

export default withRouter(PlanetPage);
