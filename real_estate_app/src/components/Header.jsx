import React from "react";
import Navbar from "./Navbar";
import Amenities from "./Amenities";

const amenitiesData = [
  {
    amenityName: "Swimming Pool",
    imgPath: "https://cdn.icon-icons.com/icons2/1369/PNG/96/-pool_90362.png",
  },
  {
    amenityName: "Gym",
    imgPath:
      "https://cdn.icon-icons.com/icons2/875/PNG/96/one-dumbbell_icon-icons.com_68167.png",
  },
  {
    amenityName: "Parking",
    imgPath: "https://cdn.icon-icons.com/icons2/1309/PNG/96/parking_86279.png",
  },
  {
    amenityName: "Private security",
    imgPath:
      "https://cdn.icon-icons.com/icons2/2783/PNG/96/verified_shield_protected_secure_security_icon_177173.png",
  },
  {
    amenityName: "King Size Bed",
    imgPath:
      "https://cdn.icon-icons.com/icons2/2248/PNG/96/bed_king_icon_137885.png",
  },
  {
    amenityName: "Medical Center",
    imgPath:
      "https://cdn.icon-icons.com/icons2/3852/PNG/96/medical_icon_236661.png",
  },
  {
    amenityName: "Wifi",
    imgPath:
      "https://cdn.icon-icons.com/icons2/614/PNG/96/wifi-medium-signal-symbol-1_icon-icons.com_56451.png",
  },
  {
    amenityName: "Library",
    imgPath:
      "https://cdn.icon-icons.com/icons2/2346/PNG/96/books_library_icon_142908.png",
  },
  {
    amenityName: "Cafeteria",
    imgPath:
      "https://cdn.icon-icons.com/icons2/1369/PNG/96/-local-cafe_90185.png",
  },
  {
    amenityName: "Hair Dryer",
    imgPath:
      "https://cdn.icon-icons.com/icons2/2248/PNG/96/hair_dryer_icon_135530.png",
  },
];

function Header() {
  return (
    <>
      <div className="header">
        <Navbar />
        <div className="intro">
          <p>Looking for a property !</p>
          <h1>
            <span>Buy </span> Properties......
          </h1>
        </div>
      </div>
      <section className='amenitiesSection'>
        <div className='amenitiesTextContainer'>
          <h3>Our Amenities</h3>
          <p>Building Amenities</p>
        </div>

        <div className='amenitiesCardContainer'>
          {amenitiesData.map((amenity, index) => (
            <Amenities
              key={index}
              imgPath={amenity.imgPath}
              amenityName={amenity.amenityName}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Header;
