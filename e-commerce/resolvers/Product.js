exports.Product = {
    category: ({ categoryId }, args, { db }) => db.categories.find(c => c.id === categoryId),
    reviews: (parent, args, { db }) => {
        const { id: productId } = parent;
        console.log(parent);
        return db.reviews.filter(review => review.productId === productId)
    }
}