// const XMLHttpRequest = require("xmlhttprequest");
// const http = new XMLHttpRequest();
// const url = "http://localhost:3000/canchas/reserva";
// const email = "mi_mail";
// const password = "mi_pass";
// http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// http.open("POST", url, true);

// http.onreadystatechange = function () {
//   if (http.readyState == 4 && http.status == 200) {
//     //aqui obtienes la respuesta de tu peticion
//     alert(http.responseText);
//   }
// };
// http.send(JSON.stringify({ email: email, password: password }));
const axios = require("axios").default;
axios
  .post("http://localhost:3000/canchas/reserva", {
    data: {
      userId: 1,
      title: "Esto es un post nuevo",
      body: "cuerpo de este post. Me gusta la librería Axios!!",
    },
  })
  .then(function (res) {
    if (res.status == 201) {
      mensaje.innerHTML =
        "El nuevo Post ha sido almacenado con id: " + res.data.id;
    }
  })
  .catch(function (err) {
    console.log(err);
  })
  .then(function () {
    loading.style.display = "none";
  });
