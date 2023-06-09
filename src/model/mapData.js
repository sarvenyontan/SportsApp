const Images = [
    { image: require("../assets/banners/basketball.jpeg") },
    { image: require("../assets/banners/swimicon.png") },
    { image: require("../assets/banners/voleyball.jpg") },
    { image: require("../assets/banners/futsal.webp.jpg") },
];

export const markers = [
    {
      coordinate: {
        latitude: 40.986192,
        longitude: 28.911328
      },
      title: "Basketball Event",
      description: "This is the Basketball Event",
      image: Images[0].image,
      rating: 4,
      reviews: 99,
    },
    {
      coordinate: {
        latitude: 40.956709,
        longitude: 28.815439
      },
      title: "Swimming Event",
      description: "This is the Swimming Event",
      image: Images[1].image,
      rating: 5,
      reviews: 102,
    },
    {
      coordinate: {
        latitude: 40.871197,
        longitude: 29.130901
      },
      title: "Voleyball Event",
      description: "This is the Voleyball EVent",
      image: Images[2].image,
      rating: 3,
      reviews: 220,
    },
    {
      coordinate: {
        latitude: 40.923021,
        longitude: 29.122043
      },
      title: "Football Event",
      description: "This is the Football event",
      image: Images[3].image,
      rating: 4,
      reviews: 48,
    },
    {
      coordinate: {
        latitude: 40.962426,
        longitude: 29.062781
      },
      title: "Running Event",
      description: "This is the Running event",
      image: Images[3].image,
      rating: 4,
      reviews: 178,
    },
];



  export const mapStandardStyle = [
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
  ];
