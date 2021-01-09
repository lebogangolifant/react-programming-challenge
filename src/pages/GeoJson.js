export const ValidatesJsonData = () => {
  return fetch('https://ambrite.ch/challenge/geo.json')
    .then((Response) => Response.json())
    .then((responseJson) => {
      return responseJson.validates;
    })
    .catch((error) => {
      console.error(error);
    });
};

export default ValidatesJsonData;
