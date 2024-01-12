//src/Types/IUserResponse.ts
export interface UserResponse {
	id: string
	documentNumber: string
	email: string
	phoneNumber: string
	fullName: string
	motherName: string
	birthDate: string // ou Date
	address: AddressResponse
	documentType: "RG" | "CNH" | "RNE"
	documentPhotoFront: string // Pode ser URL
	documentPhotoBack?: string
	deviceInfo: DeviceInfo
}

export interface AddressResponse {
	postalCode: string
	street: string
	number: string
	addressComplement?: string
	neighborhood: string
	city: string
	state: string
	latitude: string
	longitude: string
}

export interface DeviceInfo {
	deviceID: string
	deviceModel: string
	operatingSystem: string
	appVersion: string
	location: Location
}

export interface Location {
	latitude: string
	longitude: string
}
