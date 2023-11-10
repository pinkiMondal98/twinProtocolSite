import React, { useState, useEffect, useRef  } from "react";

const carouselData = [
  {
    image: "https://cdn.artcld.com/img/w_1920,h_1920,c_fit/20omwhhjqxa2bz6eqbqi.jpg",
    title: "Bill Wyland (Founder & Owner)",
    description: "Bill Wyland, the driving force behind the gallery’s operations, was born in 1958 in Dearborn, Michigan. ",
    buttonLabel: "Ask My Twin Now!",
    buttonLink: "#",
  },
  {
    image: "https://cdn.artcld.com/img/w_1366,h_1366,c_fit/vpgzo3f1u64djodpinw0.jpg",
    title: "Art and Beyond",
    description: "Discover Wonderful Artwork in the Gallery. Previously located on Front Street in Lahaina, Hawaii",
    buttonLabel: "Ask My Twin Now!",
    buttonLink: "#",
  },
  {
    image: "https://cdn.artcld.com/img/w_1366,h_1366,c_fit/l0iupyspp7dd6qgkbmm9.jpg",
    title: "Bill Wyland Galleries",
    description: "Bill Wyland's Gallery features over thirty artists with a variety of works including original paintings, sculptures, glass works and more. ",
    buttonLabel: "Ask My Twin Now!",
    buttonLink: "#",
  },
  // Add more carousel items as needed
];

const MyCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
      const video = videoRef.current;
      if (video.paused) {
          video.play();
      } else {
          video.pause();
      }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % carouselData.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  return (
    <div className="row"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        width:'100%',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        position:'relative'
      }}
    >
      {carouselData.map((item, index) => (
        <div
          key={index}
          className={`absolute flex justify-content-around transition-opacity duration-1000 md:mt-2 p-5`}
          style={{
            flexDirection: 'row', 
            justifyContent:'center',
            width: "100%",
            height: "auto",
          }}
        >
          <img src={item.image} alt={item.title} className={`object-cover col-4 mr-14 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }` }
          style={{
            height:"auto",
            maxHeight:"300px",
            width:"350px",
            objectFit:'contain',
            overflow: "hidden",
            boxShadow: "0 0 30px rgba(0, 0, 0, 0.2)",}}
          />
          {/* avatar bill */}
          <video
              className="object-cover col-4"
                ref={videoRef}
                width="350"
                height="300"
                onClick={handleVideoClick}               
                poster="https://cdn.artcld.com/img/w_1920,h_1920,c_fit/20omwhhjqxa2bz6eqbqi.jpg"
                style={{
                  height:"auto",
                  maxHeight:"300px",
                  width:"350px",
                  objectFit:'contain',
                  overflow: "hidden",
                  boxShadow: "0 0 30px rgba(0, 0, 0, 0.2)",}}
            >
                <source src="https://famousspeople-images.s3.amazonaws.com/will-vid.mp4" type="video/mp4" />
          </video>
          <div className="w-100"></div>
          {/* description for bill */}
          {/* <div className={`text-black col-6 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            height:"auto",
            width:"250px",
          }}
          >
            <div className="d-flex align-items-center mt-20">
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="text-sm mt-2">{item.description}</p>
              <a href={item.buttonLink} className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 inline-block">
                {item.buttonLabel}
              </a>
            </div>
          </div> */}
        </div>
      ))}
    </div> 
  );
};

export default MyCarousel;
