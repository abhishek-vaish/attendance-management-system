import { afterAll, beforeAll, describe, expect } from "@jest/globals";
import supertest from "supertest";

import { CONFIG } from "../settings";

describe("Authentication API", () => {
  let TOKEN;
  beforeAll(async () => {
    const payload = {
      emp_id: 103702,
      name: "Test User",
      department: 1,
      position: 1,
      report_manager: null,
      project_manager: null,
      start_time: "10:00:00",
      end_time: "19:00:00",
      username: "test.user",
      password: "123456789",
      is_active: true,
    };

    await supertest(CONFIG.URL)
      .post("/authentication/register")
      .send(payload)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
  });

  test("Login User", async () => {
    const payload = {
      username: "test.user",
      password: "123456789",
    };

    const response = await supertest(CONFIG.URL)
      .post("/authentication/login")
      .send(payload)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(201);

    TOKEN = JSON.parse(response.text).token;
  });

  test("Logout User", async () => {
    await supertest(CONFIG.URL)
      .delete("/authentication/logout")
      .set("Authorization", `Bearer ${TOKEN}`)
      .expect(204);
  });
});
