exports.Query = {
    products: (parent, { filter }, { db }) => {
        let filterProducts = db.products;
        if (filter) {
            const { onSale, avgRating} = filter;
            if (onSale) filterProducts = filterProducts.filter(product => product.onSale);
            if ([1,2,3,4,5].includes(avgRating)) {
                filterProducts = filterProducts.filter(product => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    db.reviews.forEach(review => {
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
    product: (parent, { id: productID }, { db }) => db.products.find(product => product.id === productID),
    categories: (parent, args, { db }) => db.categories,
    category: (parent, { id: categoryID }, { db }) => db.categories.find(c => c.id === categoryID)
}