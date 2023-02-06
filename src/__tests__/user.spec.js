import { beforeAll, describe, test } from "@jest/globals";
import supertest from "supertest";
import { CONFIG } from "../settings";

describe("User API", () => {
  let TOKEN;

  beforeAll(async () => {
    const payload = {
      username: "test.user",
      password: "123456789",
    };
    const response = await supertest(CONFIG.URL)
      .post("/authentication/login")
      .send(payload)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    TOKEN = JSON.parse(response.text).token;
  });

  test("Update User", async () => {
    const payload = {
      name: "Update Test User",
    };
    await supertest(CONFIG.URL)
      .patch("/user/update-user")
      .send(payload)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`)
      .expect(200);
  });

  test("Update Authentication", async () => {
    const payload = {
      username: "test.user.update",
    };
    await supertest(CONFIG.URL)
      .patch("/user/update-authentication")
      .send(payload)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`)
      .expect(200);
  });

  test("Deactivate User", async () => {
    console.log(TOKEN);
    await supertest(CONFIG.URL)
      .patch("/user/deactivate-user")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`)
      .expect(200);
  });

  test("Deactivate Authentication", async () => {
    await supertest(CONFIG.URL)
      .patch("/user/deactivate-authentication")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`)
      .expect(200);
  });
});
