export type MediaSize = 'card' | 'thumbnail' | 'square';

type SizeDetails = {
  filename: string
  width: number
  height: number
}

type ImageSizesType = {
  card?: SizeDetails
  thumbnail?: SizeDetails
  square?: SizeDetails
}

export type ImageSizeKeys = keyof ImageSizesType;

export type MediaType = {
  id: string
  filename: string
  alt: string
  mimeType: string
  height: number
  width: number
  fileSize: number
  sizes: ImageSizesType
  createdAt: string
  updatedAt: string
}
