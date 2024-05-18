import React, { useState } from "react";
import CountrySelect from "./CountrySelect"; // Assurez-vous que le chemin est correct

const CountryIntegration = () => {
  const [country, setCountry] = useState("");

  return (
    <div>
      <CountrySelect countryChoice={country} setActiveCountry={setCountry} />
    </div>
  );
};

export default CountryIntegration;
