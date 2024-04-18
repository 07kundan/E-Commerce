
// ########## KUNDAN ##########

//  It'll give all products data
export async function fetchAllProductsData() {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  }


//   It'll give products data of only given catogory
  export async function fetchCategoryData(category) {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  }