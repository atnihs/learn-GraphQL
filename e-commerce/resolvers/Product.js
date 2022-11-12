exports.Product = {
    category: ({ categoryId }, args, { categories }) => categories.find(c => c.id === categoryId),
    reviews: (parent, args, { reviews }) => {
        const { id: productId } = parent;
        console.log(parent);
        return reviews.filter(review => review.productId === productId)
    }
}