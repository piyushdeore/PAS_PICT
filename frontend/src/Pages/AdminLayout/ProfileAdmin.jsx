import React from "react";
import GuestsApprovalGrid from "../../Components/Grid/GuestsApprovalGrid";
import KanbanBoard from "../../Components/KanbanBoard";
import KanbanTemp from "../../Components/KanbanTemp";

export default function ProfileAdmin() {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Dashboard</h2>
      <div style={{ width: "100%", height: "100%", marginTop: "50px" }}>
        <KanbanBoard />
      </div>
      <div style={{ width: "100%", height: "60vh", marginTop: "50px" }}>
        <GuestsApprovalGrid />
      </div>
    </div>
  );
}
