const axios = require("axios");

it("Questionnaire 1", async () => {
  try {
    let data = await axios.get("/api/questionnaire/2");
    expect(data).toBe(Array);
  } catch (error) {
    console.log(error);
  }
});

it("Questionnaire 2", async () => {
  try {
    let data = await axios.get("/api/questionnaire/1");
    expect(data).toBe(Array);
  } catch (error) {
    console.log(error);
  }
});
