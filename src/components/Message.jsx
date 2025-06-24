import profile from "../assets/profile.png";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Message() {
  return (
    <div
      style={{
        width: "90%",
        height: "205px",
        border: "1px solid black",
        marginTop: "20px",
        marginLeft: "70px",
      }}
    >
      <div>
        <div
          style={{ display: "flex", alignItems: "center", background: "pink" }}
        >
          <img src={profile} style={{ width: "40px", padding: "5px" }} />
          <span style={{fontSize:'16px',fontWeight:530}}>suraj</span>
          <div style={{ marginLeft: "1000px" }}>24-06-2025</div>
          <div
            style={{
              marginLeft: "auto",
              padding: "10px",
              marginTop: "10px",
              marginRight: "15px",
            }}
          >
            12:00 PM
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "35px", marginTop: "5px", fontSize:'16px',fontWeight:450 }}>Offer Latter</div>

    <div style={{display:'flex',alignItems:'center'}}>
      <div
        style={{
          width: "87%",
          background: "#81ecec",
          height: "80px",
          border: "1px solid black",
          marginTop: "8px",
          marginLeft: "35px",
        }}
      >
        <div style={{ marginLeft: "10px", marginTop: "2px" }}>
          Mr suraj you are select for Software Developement role in our company
          dhunlay so you have to come tommorrow on time. Monday to friday is
          working days in our company if you have any quiry contact us .{" "}
        </div>
      </div>
      <Button variant="outlined" startIcon={<DeleteIcon />} style={{marginLeft:'10px',borderRadius:'5px'}}>
        Delete
      </Button>
      </div>
      
    </div>
  );
}
