export const JsonData = () => {
  return fetch('https://ambrite.ch/challenge/data.json')
    .then((response) => response.json())
    .then((json) => {
      return json.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
