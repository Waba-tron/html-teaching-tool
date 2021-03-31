import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminScreen = () => {
  useEffect(() => {
    axios.get("/api/questionnaire/1").then((response) => {
      console.log(response.data);
      console.log(response.status);
    });

    axios.get("/api/questionnaire/2").then((response) => {
      console.log(response.data);
      console.log(response.status);
    });
  }, []);
  return (
    <div>
      <h1>Admin page</h1>
      <section>
        <h1>Users learning styles</h1>
      </section>

      <section>
        <h1>Has the tool helped students learn html</h1>
      </section>
    </div>
  );
};

export default AdminScreen;
