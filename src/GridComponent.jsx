import React, { useState, useEffect } from "react";

const artistInfo = `
  Quote: "Art is born of inspiration and evolves into an emotional release of energy." 
   Born: Bayshore - Long Island, New York 
   Raised: Schwenksville, Pennsylvania 
   Resides: San Diego, California 
   Career Date: January, 2010 
   Background: Bachelor's Degree in Fine Art - Tyler School of Art - Philadelphia, PA & Rome, Italy
   Favorite Medium: Bronze 
   Signature Style: Whimsical Surrealism & Fantasy filled with intense detail & light-hearted sarcasm.
`;

const cardData = [
  {
    title: "BILL MACK",
    description: "Bill Mack is the world’s preeminent relief sculptor The relief form – in Mack’s case, primarily “alto relief” – originated in ancient temple friezes and marble sepulchers and is virtually nonexistent in galleries anywhere. To excel in this exacting form, in which foreshortening poses daunting technical challenges, Mack is also a master draftsman.",
    images: [
      "https://billmack.com/wp-content/uploads/2019/06/bill_new.png",
      "https://billmack.com/wp-content/uploads/2018/12/sm.jpg",
      "https://billmack.com/wp-content/uploads/2020/02/ICON-David-Bowie-48-x-48-Color-scaled.jpg",
    ],
  },
  {
    title: "STEVE BARTON",
    description: "Steve Barton is known for his bold, brightly colored, impressionistic scenes and still lifes. Perhaps one of the most recognisable features of Steve’s art is his patented wavey frame design. It’s not often you forget seeing a painting where the whole frame and canvas bend and curve together to make a complete artwork.",
    images: [
      "https://bartonstudios.com/wp-content/uploads/2023/07/bartonstudios-17.jpeg",
      "https://bartonstudios.com/wp-content/uploads/2023/05/Classic-Legends-18x24-30x40-1.jpg",
      "https://bartonstudios.com/wp-content/uploads/2023/08/North-Shore-Calling-12x9-24x18-40x30-1.jpg",
    ],
  },
  {
    title: "PAUL LOTZ",
    description: artistInfo,
    images: [
        "https://static.wixstatic.com/media/90a441_9551139f258c41a79f969c69caf7366e~mv2.jpg/v1/fill/w_380,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90a441_9551139f258c41a79f969c69caf7366e~mv2.jpg",
      "https://static.wixstatic.com/media/f985be_493cd1bcd4a44d29ac6c5f437dfff2b7~mv2.jpg/v1/fill/w_956,h_1452,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Lady%20Godiva%20-%20AP%20-%20blk%201.jpg",
      "https://billmackgallery.com/wp-content/uploads/2022/01/I-Believe-Paul-Lotz.jpg",
    ],
  },
  {
    title: "DeVoN",
    description: "DeVon was born in Hollywood , California in 1968 eight months after the tragic death of his father, a young, ambitious film producer. His mother, a singer, left Hollywood and relocated her family to the Bay Area where she remarried. After some time the family moved again to a small rural town near Park City, Utah.There, DeVon excelled in classical and jazz music, receiving a college scholarship in Music.",
    images: [
      "https://storage.googleapis.com/production-constantcontact-v1-0-1/631/298631/WW5l7QtB/9bbc641f313c4d31905fc98edfb8bba5",
      "https://storage.googleapis.com/production-constantcontact-v1-0-1/631/298631/WW5l7QtB/03f0fd54291c4857af3dda0ae83fe25c",
      "https://storage.googleapis.com/production-constantcontact-v1-0-1/631/298631/WW5l7QtB/38e1e08f55a6414c833df23266c4d293",
    ],
  },
];

const Card = ({ title, description, images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage, images]);

  return (
    <div className="col-6 bg-white p-4 rounded  hover:-translate-y-1 hover:scale-110"
      style={{
        width: '48%',
        marginBottom: '2rem',
        marginTop:'2rem',
        padding: '2rem',
        boxShadow: "0 0 30px rgba(0, 0, 0, 0.2)",
      }}
      >
      <div className="relative w-108 h-80">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`absolute  w-full h-full transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              objectFit:'contain',
            }}
          />
        ))}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm mt-2">{description}</p>
    </div>
  );
};

const GridComponent = () => {
  return (
    <div className="row mt-4"
    style={{
      position:"relative",
      display: 'flex',
       flexWrap: 'wrap',
        justifyContent: 'space-between'
    }}
    >
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} images={card.images} />
      ))}
    </div>
  );
};

export default GridComponent;
