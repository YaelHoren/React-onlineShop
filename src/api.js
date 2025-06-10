
export const fetchProducts = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                if (Math.random() < 0.0) {
                    throw new Error("Simulated network error");
                }
                const response = await fetch('https://dummyjson.com/products/category/mobile-accessories');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                console.log(result); 
                resolve(result.products); 
            } catch (error) {
                reject(error.message);
            }
        }, 1000);
    });
};