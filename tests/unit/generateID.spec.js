const generateId = require("../../src/utils/generateUUID");

//se é possivel gerar um uuid unico
//se esta indo um id
//se esse id é uma string
//se o tamanho da string é o que eu quero, 36 caracteres 

describe("generateUUID", () => {
  it("se é possivel gerar um uuid unico", () => {
    const id = generateId();

    expect(id).toBeDefined();
    expect(typeof id).toBe("string");
    expect(id).toHaveLength(36);
  })
}) 