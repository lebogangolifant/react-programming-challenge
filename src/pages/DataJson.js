export const ReturnsJsonData = () => {
  return fetch('https://ambrite.ch/challenge/data.json')
    .then((Response) => Response.json())
    .then((responseJson) => {
      return responseJson.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export default ReturnsJsonData;
