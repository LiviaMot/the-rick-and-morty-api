import api from "./api"

export const getCharacters = async () => {
  const response = await api.get('/character')

  if (response.status !== 200) {
    return [] // throw new error('')
  }

  return response.data.results
}