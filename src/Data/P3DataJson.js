export const ReturnSingleArray = () => {
  return fetch('https://ambrite.ch/challenge/p3Data.json')
    .then((Response) => Response.json())
    .then((responseJson) => {
      return responseJson.union;
    })
    .catch((error) => {
      console.error(error);
    });
};

export default ReturnSingleArray;
