const url = "https://bookdata-a9250-default-rtdb.asia-southeast1.firebasedatabase.app/BookData.json";

async function showBooks() {
    const res = await fetch(url);
    const data = await res.json();

    const div = document.getElementById("display");
    div.innerHTML = "";

    if (!data) return;

    Object.values(data).forEach(book => {
        div.innerHTML += `
            <div class="card">
                <img src="${book.coverImageURL}">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <p>₹${book.price}</p>
            </div>
        `;
    });
}

showBooks();
