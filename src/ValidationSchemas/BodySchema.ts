// src/ValidationSchemas/BodySchema.ts
import { z } from "zod"

const BodySchema = z.object({
	clientCode: z.string(),
	onboardingIncomplete: z.boolean()
})

export default BodySchema
