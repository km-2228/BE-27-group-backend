document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    tambah_status();
  });
  
  function tambah_status() {
    console.log("clicked");
  
    let formData = {
      judul: document.getElementById("judul").value,
      status: document.getElementById("status").value
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
      "https://63515f33dfe45bbd55be6e39.mockapi.io/aseanyouthforum/forum2",
      formData
    ).then((data) => {
    let status = document.getElementById("status");
      status.innerHTML = "Artikel Dikirim";
      console.log(data);
      window.location.href = "utama.html";
    });
  }