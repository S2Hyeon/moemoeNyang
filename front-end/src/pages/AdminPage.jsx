import React from "react";
import AdminFloatingTab from "../components/admin/AdminFloatingTab";
import ReportCard from "../components/admin/ReportCard";

const AdminPage = () => {
  const arr = Array.from({ length: 10 }, (e, i) => i);
  return (
    <div className="flex flex-col h-[90vh] py-6 items-center overflow-scroll gap-7">
      {arr.map((e) => {
        return <ReportCard idx={e} />;
      })}
      <div className="BottomPadding py-10" />
      <AdminFloatingTab />
    </div>
  );
};

export default AdminPage;
