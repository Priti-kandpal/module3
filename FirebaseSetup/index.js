const dbURL = "https://bookdata-a9250-default-rtdb.asia-southeast1.firebasedatabase.app/BookData.json";
async function loadBooks() {
    const res = await fetch(dbURL);
    const data = await res.json();

    const container = document.getElementById("bookContainer");
    container.innerHTML = "";

    if (!data) return;

    Object.keys(data).forEach(id => {
        const book = data[id];

        container.innerHTML += `
            <div class="card">
                <img src="${book.CoverImageURL}" alt="Book Cover">
                <h3>${book.Title}</h3>
                <p><b>Author:</b> ${book.Author}</p>
                <p><b>Price:</b> ₹${book.Price}</p>

                <button class="btn-delete" onclick="deleteBook('${id}')">
                    Delete
                </button>
            </div>
        `;
    });
}


async function addBook() {
    let book = {
        Title: document.getElementById("title").value,
        Author: document.getElementById("author").value,
        Price: document.getElementById("price").value,
        CoverImageURL: document.getElementById("image").value
    };

    await fetch(dbURL, {
        method: "POST",
        body: JSON.stringify(book)
    });

    loadBooks(); 
}


async function deleteBook(id) {
    await fetch(`https://bookdata-a9250-default-rtdb.asia-southeast1.firebasedatabase.app/BookData/${id}.json`, {
        method: "DELETE"
    });

    loadBooks();
}

// Load books on startup
loadBooks();
