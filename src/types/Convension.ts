export interface Convension {
  contactId: string
  content: ConvensionContent[]
}

export interface ConvensionContent {
  from: string
  message: string
  image: string
}