import "@public/styles/recommcard.css";


const RecommendedCard = ({placeImg,placeName,time}) => {
  return (
    <>
        <div className="rcard_container">
            <div className="img_section">
                <img src={"./assets/places/"+placeImg} alt="placeimg" />
            </div>
            <div className="time">
                {time}
            </div>
            <div className="place_message">
                {placeName}
            </div>
        </div>
    </>
  )
}

export default RecommendedCard