// tests/index.test.mjs
import { describe, it } from "node:test"
import assert from "assert"
import { handler } from "../dist/index.js"

const TEST_JSON = {
	body: JSON.stringify({
		clientCode: "unique_client_identifier",
		onboardingIncomplete: true
	})
}
const TEST_JSON_FAIL = {} // Corpo vazio para simular o erro

describe("Lambda tests", () => {
	it("Should work", async () => {
		const result = await handler(TEST_JSON)
		assert.equal(
			result.statusCode,
			201,
			"Expected status code 201 for successful onboarding completion"
		)
	})

	it("Should not work", async () => {
		const result = await handler(TEST_JSON_FAIL)
		assert.equal(
			result.statusCode,
			400,
			"Expected status code 400 when the request body is empty"
		)
	})
})
