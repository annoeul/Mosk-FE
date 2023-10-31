const API_BASE_URL = "http://localhost:9090/api/v1/public"

export const getData = async (storeId) => {
  const response = await fetch(`${API_BASE_URL}/categories/all/${storeId}`)
  if (response.ok) {
    const data = await response.json()
    return data.data
  } else {
    throw new Error(`Error: ${response.status}`)
  }
}
export const getProductImage = async (productId) => {
  const response = await fetch(`${API_BASE_URL}/products/img/${productId}`)
  if (response.ok) {
    const data = await response.json()
    return data
  } else {
    throw new Error(`Error: ${response.status}`)
  }
}
