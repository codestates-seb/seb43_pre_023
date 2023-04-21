export const fetchUserInfo = async () => {
  return fetch(`/accounts/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Accept: "application/json",
      authorization: sessionStorage.getItem("access_token"),
    },
  })
    .then((res) => {
      if (!res.ok) {
        // error coming back from server
        throw Error("could not fetch the data for that resource");
      }
      return res.json();
    })
    .catch((err) => {
      console.error(err.message);
    });
};
