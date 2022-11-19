export const getWeather = async () => {
  fetch(
    "https://api.met.no/weatherapi/locationforecast/2.0/classic?lat=0&lon=0",
    {
      method: "GET",
      headers: {
        "user-agent": "vscode-restclient",
        accept: "application/xml",
      },
    }
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
};
