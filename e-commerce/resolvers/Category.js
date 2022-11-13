exports.Category = {
    products: ({ id: categoryId }, { filter }, { db }) => {
        const categoryProduct = db.products.filter(p => p.categoryId === categoryId);
        let filteredCategoryProducts = categoryProduct;
        if (filter && filter.onSale === true) {
            filteredCategoryProducts = filteredCategoryProducts.filter(p => p.onSale);
        }

        return filteredCategoryProducts;
    },
}