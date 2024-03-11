


export function AddBook(){

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const title = formData.get('title');
            const price = formData.get('price');
            bookService.add({ title, listPrice: price })
                .then(() => location.reload())
                .catch(err => console.error(err));
        }}>
            <label htmlFor="title">Title</label><br />
            <input type="text" name="title" required /><br />
            <label htmlFor="price">Price</label><br />
            <input type="number" name="price" step="0.01" required /><br />
            <button>Add</button>
        </form>
    )
}