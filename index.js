// Add your code here
function submitData(userName, userEmail) {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
    }),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(object => {
      const idElement = document.createElement("p");
      idElement.textContent = object.id;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      const errorElement = document.createElement("p");
      errorElement.textContent = error.message;
      document.body.appendChild(errorElement);
    });
}
