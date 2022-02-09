import axios from "axios";

export const getAllPlaces = async () => {
  try {
    const data = await axios
      .get(`${process.env.REACT_APP_API_URL}/recs`)
      .then((res) => res.data.data);
    return data;
  } catch (e) {
    throw e.message;
  }
};

export const addPlace = async (recList) => {
  const testData = {
    name: "Hello",
    recommendations: [
      {
        address: "8300 4th St N, St. Petersburg, FL 33702, USA",
        name: "Noble Crust",
        url: "https://maps.google.com/?cid=14688267980977487591",
        photos: [
          {
            height: 1365,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/114892410633772340239">Noble Crust</a>',
            ],
            width: 2048,
          },
          {
            height: 2268,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/103808585977441368537">Taras Legar</a>',
            ],
            width: 4032,
          },
          {
            height: 4000,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/114892410633772340239">Noble Crust</a>',
            ],
            width: 6000,
          },
          {
            height: 4032,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/100750189273361391251">Kaé Goddess</a>',
            ],
            width: 3024,
          },
          {
            height: 4000,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/114892410633772340239">Noble Crust</a>',
            ],
            width: 6000,
          },
          {
            height: 683,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/114892410633772340239">Noble Crust</a>',
            ],
            width: 1024,
          },
          {
            height: 4000,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/114892410633772340239">Noble Crust</a>',
            ],
            width: 6000,
          },
          {
            height: 4000,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/114892410633772340239">Noble Crust</a>',
            ],
            width: 6000,
          },
          {
            height: 3096,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/116746411434821666847">Suzanne Moorhead</a>',
            ],
            width: 4128,
          },
          {
            height: 3000,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/117478139690557109029">Alex Divinsky</a>',
            ],
            width: 4000,
          },
        ],
      },
      {
        address: "10165 McKinley Dr, Tampa, FL 33612, USA",
        name: "Busch Gardens Tampa Bay",
        url: "https://maps.google.com/?cid=12152398480662399058",
        photos: [
          {
            height: 3120,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/106416428686078044343">Osvaldo Diniz</a>',
            ],
            width: 4160,
          },
          {
            height: 331,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/115651115130893948010">md mokchedmunsi</a>',
            ],
            width: 499,
          },
          {
            height: 743,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/109600611439452997426">The Old Dude</a>',
            ],
            width: 1080,
          },
          {
            height: 1440,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/101177584547641536257">Math Magician</a>',
            ],
            width: 2560,
          },
          {
            height: 2868,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/102585930116207022988">Katharine Gonzalez</a>',
            ],
            width: 2661,
          },
          {
            height: 12000,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/110144603513615227390">Miguel Branch</a>',
            ],
            width: 9000,
          },
          {
            height: 12000,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/116042590170127332125">Lynn Geiser</a>',
            ],
            width: 9000,
          },
          {
            height: 357,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/108007962241949556847">Tung Cao Thanh</a>',
            ],
            width: 500,
          },
          {
            height: 3024,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/101209066366774183901">Roberto Borjas</a>',
            ],
            width: 4032,
          },
          {
            height: 3024,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/104868036406663767372">Tetiana Sachek</a>',
            ],
            width: 4032,
          },
        ],
      },
    ],
  };
  try {
    const data = await axios
      .post(`${process.env.REACT_APP_API_URL}/itins`, recList)
      .then((res) => res.data);
    return data;
  } catch (e) {
    throw e.message;
  }
};
