const url =
  "https://api.coincap.io/v2/assets?api-key=69ae8b08-db21-448a-b1c5-c344a5501628";

export const getCoins = async (pagina = 0) => {
  try {
    const resp = await fetch(`${url}&limit=10&offset=${pagina}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
