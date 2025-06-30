import { useState } from "react";
import { messages } from "../assets/data";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import "./Message.css";

export default function MessageList() {
  const [openMessageId, setOpenMessageId] = useState(null);

  return (
    <div style={{ backgroundColor: "#D6A2E8", minHeight: "100vh", padding: "20px" }}>
      {messages.map((item) => (
        <div key={item.id}>
          <div className="message-wrapper">
            <div className="message-header">
              <img src={item.dp} alt="profile" />
              <span className="message-username">{item.username}</span>
              <div className="message-date-time">
                <span>{item.date}</span>
                <span>{item.time}</span>
                <Button
                  variant="outlined"
                  size="small"
                  style={{
                    borderRadius: "50%",
                    minWidth: "35px",
                    width: "35px",
                    height: "35px",
                    padding: 0,
                    color: "white",
                    borderColor: "white",
                  }}
                >
                  <DeleteIcon fontSize="small" />
                </Button>
              </div>
            </div>

            <div className="message-title">{item.title}</div>

            <div className="message-description">
              <p style={{ marginBottom: "30px" }}>{item.description}</p>
              <div
                className="see-more-btn"
                onClick={() =>
                  setOpenMessageId(openMessageId === item.id ? null : item.id)
                }
              >
                {openMessageId === item.id ? "see less" : "see more"}
              </div>
            </div>
          </div>

          {openMessageId === item.id && (
            <div className="extra-message">{item.message}</div>
          )}
        </div>
      ))}
    </div>
  );
}
