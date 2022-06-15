import axios from "axios";

function ArticleCreate() {
  function onFormSubmit(event) {
    event.preventDefault();

    // alert(`${event.target[0].value} ${event.target[1].value}`)

    const formData = new FormData(event.target);
    // alert(`${formData.get("title")} ${formData.get("description")}`);

    axios.post(
      "https://news-d5e47-default-rtdb.firebaseio.com/articles.json",
      Object.fromEntries(formData.entries())
    );
  }
  return (
    <form className="ArticleCreate" onSubmit={onFormSubmit}>
      <div>
        <label>
          Title
          <input type="text" name="title" required />
        </label>
        <label>
          Description
          <textarea name="description" required></textarea>
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default ArticleCreate;
