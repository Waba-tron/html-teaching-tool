const axios = require("axios");
it("Quiz 1", async () => {
  try {
    let data = await axios.get("/api/quiz/1");
    expect(data).toBe(Array);
  } catch (error) {
    console.log(error);
  }
});

it("Quiz 2", async () => {
  try {
    let data = await axios.get("/api/quiz/2");
    expect(data).toBe(Array);
  } catch (error) {
    console.log(error);
  }
});
