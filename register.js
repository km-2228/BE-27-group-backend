document.getElementById("submit2").addEventListener("click", function (event) {
    event.preventDefault();
    register();
  });
  
  function register() {
    console.log("clicked");
  
    let formData = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      nama: document.getElementById("nama").value
    };
  
    console.log(formData);
  
    async function postData(url = "", data = {}) {
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      return response.json();
    }
  
    postData(
      "https://63515f33dfe45bbd55be6e39.mockapi.io/aseanyouthforum/akun",
      formData
    ).then((data) => {
      let status = document.getElementById("hasil");
      status.innerHTML = "Berhasil Mendaftar";
      console.log(data);
      window.location.href = "index.html";
    });
  }