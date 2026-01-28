import { useState } from "react";
function Awareness({ messages, setMessages }) {
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const save = () => {
    if (!text.trim()) return;
    editId
      ? setMessages(
          messages.map(m =>
            m.id === editId ? { ...m, text } : m
          )
        )
      : setMessages([...messages, { id: Date.now(), text }]);

    setText("");
    setEditId(null);
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Mental Health Awareness</h2>
      <img
        src="https://images.pexels.com/photos/3958379/pexels-photo-3958379.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Mental Health Awareness"
        style={{
          width: "100%",
          maxHeight: "300px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      />
      <p>
        Mental health awareness helps people understand that mental
        well-being is as important as physical health. Talking openly
        about mental health reduces fear, stigma, and misunderstanding.
      </p>
      <p>
        Sharing awareness messages can inspire others, give hope, and
        remind people that they are not alone.
      </p>
      <h3>Share Your Awareness Message</h3>
      <textarea
        placeholder="Type your awareness message here..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button onClick={save}>
        {editId ? "Update Message" : "Add Message"}
      </button>
      <hr />
      {messages.length === 0 && (
        <p style={{ textAlign: "center", color: "gray" }}>
          No messages added yet.
        </p>
      )}
      {messages.map(m => (
        <div
          key={m.id}
          style={{
            background: "#f4f6f8",
            padding: "10px",
            borderRadius: "6px",
            marginBottom: "10px",
          }}
        >
          <p>{m.text}</p>
          <button
            onClick={() => {
              setText(m.text);
              setEditId(m.id);
            }}
          >
            Edit
          </button>
          <button
            onClick={() =>
              setMessages(messages.filter(x => x.id !== m.id))
            }
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
export default Awareness;
