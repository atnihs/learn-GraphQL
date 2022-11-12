exports.Query = {
    products: (parent, { filter }, { products, reviews }) => {
        let filterProducts = products;
        if (filter) {
            const { onSale, avgRating} = filter;
            if (onSale) filterProducts = filterProducts.filter(product => product.onSale);
            if ([1,2,3,4,5].includes(avgRating)) {
                filterProducts = filterProducts.filter(product => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    reviews.forEach(review => {
                        if (review.productId === product.id) {
                            sumRating += review.rating;
                            numberOfReviews++;
                        }
                    });
                    const avgProductRating = sumRating / numberOfReviews;
                    return avgProductRating >= avgRating;
                })
            }
        }
        return filterProducts;
    },
    product: (parent, { id: productID }, { products }) => products.find(product => product.id === productID),
    categories: (parent, args, { categories }) => categories,
    category: (parent, { id: categoryID }, { categories }) => categories.find(c => c.id === categoryID)
}