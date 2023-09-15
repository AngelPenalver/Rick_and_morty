const app = require("../src/app");
const session = require("supertest");
const agent = session(app);
const users = require("../src/utils/users");
const emailVal = users[0].email;
const passwordVal = users[0].password;
describe("Test de RUTAS", () => {
  it("Responde con status: 200", async () => {
    await agent.get("/rickandmorty/character/1").expect(200);
  });

  it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
    const { body } = await agent.get("/rickandmorty/character/1");
    const propiedades = [
      "id",
      "name",
      "species",
      "gender",
      "status",
      "origin",
      "image",
    ];
    propiedades.forEach((prop) => {
      expect(body).toHaveProperty(prop);
    });
  });
  it("Si hay un error responde con status: 500", async () => {
    await agent.get("/rickandmorty/characters/800").expect(404);
  });
});
describe("GET /rickandmorty/login", () => {
  it("Si login es correcto setear access a true", async () => {
    await agent
      .get(`/rickandmorty/login?email=${emailVal}&password=${passwordVal}`)
      .expect({
        access: true,
      });
  });
  it("Si envias la informacion incorrecta setear access a flase", async () => {
    await agent
      .get(`/rickandmorty/login?email=${!emailVal}&password=${!passwordVal}`)
      .expect({
        access: false,
      });
  });
});
describe("POST /rickandmorty/fav", () => {});
describe("DELETE /rickandmorty/fav/4", () => {});
