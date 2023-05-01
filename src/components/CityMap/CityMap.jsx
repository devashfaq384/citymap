import MapText from "./MapText";
import MapBoxApi from "./Custom";

function CityMap() {

  return(
    <div className="relative" >
        <MapBoxApi></MapBoxApi>
      <MapText></MapText>
    </div>
  )
}

export default CityMap