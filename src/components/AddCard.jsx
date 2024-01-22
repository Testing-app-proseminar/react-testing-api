import axios from "axios";
import { useState } from "react";

function AddCard(props) {

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [consumeTime, setConsumeTime] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {title, status, topic, category, content, link, consumeTime}
    
    const storedToken = localStorage.getItem("authToken");

    axios
    .post(`${import.meta.env.VITE_API_URL}/cards`, requestBody, {headers: {Authorization: `Bearer ${storedToken}`}})
    .then((response) => {

        setTitle("");
        setStatus("");
        setTopic("");
        setCategory("");
        setContent("");
        setLink("");
        setConsumeTime("");
    })
    .catch((error) => console.log(error))
  }

  return (
    <div>
      <h3>Add Study Card</h3>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Status</label>
        <select           
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}>
            <option value="To-Do">To do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>

        <label>Topic</label>
        <input
          type="text"
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <label>Category</label>
        <input
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <label>Content</label>
        <textarea
          type="text"
          name="content"
          cols={50}
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <label>Link</label>
        <input
          type="text"
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <label>Consume Time</label>
        <input
          type="text"
          name="consumeTime"
          value={consumeTime}
          onChange={(e) => setConsumeTime(e.target.value)}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddCard;