import { useState } from "react";
function Awareness({ messages, setMessages }) {
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const save = () => {
    if (!text.trim()) return;
    if (editId) {
      setMessages(
        messages.map(m =>
          m.id === editId ? { ...m, text } : m
        )
      );
    } else {
      setMessages([...messages, { id: Date.now(), text }]);
    }
    setText("");
    setEditId(null);
  };
  return (
    <div className="awareness">
      <h2 className="awareness-title">Mental Health Awareness</h2>
      <img
        src="https://images.pexels.com/photos/3958379/pexels-photo-3958379.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Mental Health Awareness"
        className="awareness-img"
      />
      <p className="awareness-text">
        Mental health awareness helps people understand that mental well-being
        is as important as physical health. Open conversations reduce stigma
        and encourage support.
      </p>
      <p className="awareness-text">
        Share your thoughts or awareness messages to inspire others and spread
        positivity.
      </p>
      <div className="message-box">
        <h3>Share Awareness Message</h3>
        <textarea
          placeholder="Type your awareness message..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button onClick={save}>
          {editId ? "Update Message" : "Add Message"}
        </button>
      </div>
      <hr />
      {messages.length === 0 && (
        <p className="empty-msg">No messages added yet.</p>
      )}
      <div className="message-list">
        {messages.map(m => (
          <div key={m.id} className="message-item">
            <p>{m.text}</p>
            <div className="msg-actions">
              <button
                onClick={() => {
                  setText(m.text);
                  setEditId(m.id);
                }}
              >
                Edit
              </button>
              <button
                className="delete"
                onClick={() =>
                  setMessages(messages.filter(x => x.id !== m.id))
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Awareness;
