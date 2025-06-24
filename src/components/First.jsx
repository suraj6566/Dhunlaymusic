import { useState } from 'react';
import './First.css';

export default function First() {
  const [show, setShow] = useState(false);

  const messages = [
    {
      date: '2025-06-23',
      time: '17:00',
      message: 'Hello! This is the first message.'
    },
    {
      date: '2025-06-22',
      time: '14:30',
      message: 'Second message from yesterday.'
    },
    {
      date: '2025-06-21',
      time: '11:15',
      message: 'Third message from day before.'
    }
  ];

  return (
    <div className="container">
      <div className="containermain">
        <button onClick={() => setShow(!show)}>Show</button>

        {show && (
          <div className="message-box">
            {messages.map((item, index) => (
              <div key={index} className="message-item">
                <p><strong>Date:</strong> {item.date}</p>
                <p><strong>Time:</strong> {item.time}</p>
                <p><strong>Message:</strong> {item.message}</p>
                <hr />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
