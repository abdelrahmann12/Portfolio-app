
import "./Navbar.css";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { House, Folder, BriefcaseBusiness, Wrench, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar flex gap-6 items-center justify-center rounded-xl">
        <Tooltip title="Home">
          <IconButton onClick={()=>navigate("/")}>
            <House color="white" />
          </IconButton>
        </Tooltip>

        <Tooltip  title="Projects">
          <IconButton onClick={()=>navigate("/projects")}>
            <Folder color="white" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Experience">
          <IconButton onClick={()=>navigate("experince")}>
            <BriefcaseBusiness color="white" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Services">
          <IconButton onClick={()=>{navigate("services")}}>
            <Wrench color="white" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Contact">
          <IconButton onClick={()=>navigate("contact")} className="">
            <Mail color="white" />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}
