const getMissionsFromAPI = async () => {
  const url = 'https://api.spacexdata.com/v3/missions';
  const response = await fetch(url);
  return response.json();
};

export default getMissionsFromAPI;
