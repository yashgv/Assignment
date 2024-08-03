import "@public/styles/popularCard.css";


const PopularCard = ({placeImg, placeName, rating}) => {
  return (
    <>
      <div className="card_container">
        
        <img src={"./assets/places/"+placeImg} alt="placeImg" className="place_img" />
        <div className="place_details">
          <div className="place_name">
            {placeName}
          </div>
          <div className="ratings">
            <div className="stars">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 11.3333L4 13.3333L5 9.33333L2 6L6.33333 5.66667L8 2L9.66667 5.66667L14 6L11 9.33333L12 13.3333L8 11.3333Z" fill="#D8D138"/>
              <path d="M8 11.3333L4 13.3333L5 9.33333L2 6L6.33333 5.66667L8 2L9.66667 5.66667L14 6L11 9.33333L12 13.3333L8 11.3333Z" fill="#F8D675"/>
              </svg>

              {rating}
            </div>

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#F3F8FE"/>
            <path d="M15.3601 7.01422C15.0358 6.90541 14.6947 6.85723 14.3532 6.85723C13.6007 6.85182 12.8704 7.10084 12.269 7.56045C12.2202 7.52309 12.1607 7.49007 12.1066 7.45813C12.0524 7.42511 11.955 7.34445 11.8738 7.30114L11.6681 7.20911C11.5598 7.14956 11.4467 7.10625 11.327 7.06782C11.3162 7.05753 11.2999 7.04616 11.2783 7.03588H11.2464C10.9264 6.92707 10.5962 6.86752 10.2551 6.85723H10.1956C10.044 6.85723 9.89298 6.86752 9.74087 6.88971H9.6759C9.5135 6.91083 9.35164 6.94872 9.19465 7.00286C7.17487 7.66384 6.45488 9.85631 7.0666 11.7727C7.41307 12.752 7.9712 13.6403 8.6966 14.3706C9.75169 15.3883 10.9053 16.287 12.1445 17.0557L12.2852 17.1429L12.4205 17.0611C13.6554 16.287 14.8025 15.3883 15.8478 14.376C16.5781 13.6457 17.1357 12.752 17.4767 11.7727C18.0782 9.85631 17.3582 7.66384 15.3601 7.01422Z" fill="#EC5655"/>
            </svg>

          </div>
        </div>

      </div>
    
    </>
  )
}

export default PopularCard