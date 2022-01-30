const baseURL = "http://localhost:5000/footprint/";

export const getData = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const postData = (booking) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(booking),
    headers: { "content-type": "application/json" },
  }).then((res) => res.json());
};

export const deleteData = (id) => {
  return fetch(baseURL + id, {
    method: "DELETE",
  });
};
