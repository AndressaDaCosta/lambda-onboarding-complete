// src/index.ts

import { APIGatewayProxyHandler } from "aws-lambda"
import BodySchema from "./ValidationSchemas/BodySchema"
// import CelcoinSDK from "ts-celcoin-sdk" // Assumindo que este é o import correto
export const handler: APIGatewayProxyHandler = async (event) => {
	if (!event.body) {
		return {
			statusCode: 400,
			body: JSON.stringify({
				message: "O corpo da requisição está vazio"
			})
		}
	}

	try {
		const requestBody = BodySchema.parse(JSON.parse(event.body))

		/* const { clientCode, onboardingIncomplete } = requestBody
		
		// Instanciar e autenticar o SDK da Celcoin
		const celcoin = new CelcoinSDK({
			// Credenciais e configurações necessárias
		})

		// Substituir pelo código real de integração com a Celcoin - SDK
		// Criar conta na Celcoin
		const createAccountResponse = await celcoin.createAccount({
			clientCode
			// Outros dados necessários para criar a conta
		})

		// Substituir esta parte pelo código real do fluxo de KYC
		// Iniciar o fluxo de KYC
		const kycResponse = await celcoin.startKYC({
			userId: createAccountResponse.id
			// Outros dados necessários para o KYC
		})


		// Response com os dados do usuário, incluindo o resultado do KYC
		const userResponse = {
			id: createAccountResponse.id,
			documentNumber: createAccountResponse.documentNumber,
			email: createAccountResponse.email,
			phoneNumber: createAccountResponse.phoneNumber,
			fullName: createAccountResponse.fullName,
			motherName: createAccountResponse.motherName,
			birthDate: createAccountResponse.birthDate,
			address: createAccountResponse.address,
			documentType: createAccountResponse.documentType,
			documentPhotoFront: createAccountResponse.documentPhotoFront,
			documentPhotoBack: createAccountResponse.documentPhotoBack,
			deviceInfo: createAccountResponse.deviceInfo,
			kycStatus: kycResponse.status
			// ...
		}
*/

		const userResponse = {}

		return {
			statusCode: 201,
			body: JSON.stringify(userResponse)
		}
	} catch (error) {
		console.error("Erro no handler:", error)
		return {
			statusCode: 500,
			body: JSON.stringify({ message: "Erro interno do servidor" })
		}
	}
}
