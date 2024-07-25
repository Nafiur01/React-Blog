import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Yoshi");
  const [pending, isPending] = useState(false);
  const history = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);

    isPending(true);

    try {
      const postData = await fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      });
      if (!postData.ok) {
        throw new Error("network response is not ok");
      } else {
        const result = await postData.json();
        console.log(result);
        isPending(false);
        history("/");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="create">
      <h2>Are you here to create new form?</h2>
      <h3>Okay lets do it then</h3>
      <br />
      <form onSubmit={HandleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
        </select>
        {!pending && <button>Create</button>}
        {pending && <button>Adding Blog...</button>}
        <p>hello {title}</p>
        <p>{body}</p>
      </form>
    </div>
  );
};

export default Create;
