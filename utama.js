let api = "https://63515f33dfe45bbd55be6e39.mockapi.io/aseanyouthforum/forum2"

async function getForum(url) {
    let res = await fetch(url)
    let data = await res.json()
    showForum(data)
}

function showForum(forum2) {
    
    let main = document.getElementById("main")
    main.innerHTML = ''

    forum2.forEach((forum) => {

        let { judul, status } = forum

        let forumAdd = document.createElement("div")
        forumAdd.classList.add('ar')

        forumAdd.innerHTML = `
        <p id="akun"></p>
        <h2><id="judul">${judul}</h2>
        <p style="text-align: justify;" id="status">${status}</p>
       </div>`
        main.appendChild(forumAdd)
    })
}

getForum(api)