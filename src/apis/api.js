async function getData(setItems, setStoreName) {
  try {
    const response = await fetch("http://localhost:9090/api/v1/public/categories/all/1")
    if (response.ok) {
      const data = await response.json()
      setItems(data.data)
      setStoreName(data.data[0].storeName)

      extractProductIds(data.data, handleProductIdsAdd)
    } else {
      console.log("Error: ", response.status)
    }
  } catch (error) {
    console.log(error)
  }
}

function extractProductIds(items, handleProductIdsAdd) {
  //각 카테고리의 상품들의 아이디를 추출
  items.forEach((item) => {
    //각 카테고리의 상품들 하나하나에 접근
    if (item.products.length > 0) {
      item.products.forEach((product) => {
        handleProductIdsAdd(product.id)
      })
    }
  })
}

function handleProductIdsAdd(productId, setProductIds) {
  setProductIds((prevProductIds) => [...prevProductIds, productId])
}

async function getImage(productId) {
  try {
    const response = await fetch(`http://localhost:9090/api/v1/public/products/img/${productId}`)
    if (response.ok) {
      return await response.json()
    } else {
      console.log("Error: ", response.status)
    }
  } catch (error) {
    console.log(error)
  }
}

export { getData, extractProductIds, handleProductIdsAdd, getImage }
