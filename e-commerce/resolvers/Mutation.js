const { v4: uuid } = require('uuid');

exports.Mutation = {
    addCategory: (parent, { input }, { db }) => {
        const { name } = input;
        const newCategory = {
            id: uuid(),
            name
        };
        db.categories.push(newCategory);
        return newCategory;
    },
    addProduct: (parent, { input }, { db }) => {
        const { name, image, price, onSale, quantity, description, categoryId } = input;

        const newProduct = { id: uuid(), name, image, price, onSale, quantity, description, categoryId };
        db.products.push(newProduct);
        
        return newProduct;
    },
    addReview: (parent, { input }, { db }) => {
        const { date, title, comment, rating, productId } = input;

        const newReview = { id: uuid(), date, title, comment, rating, productId };
        db.reviews.push(newReview);

        return newReview;
    },
    deleteCategory: (parent, { id }, { db }) => {
        db.categories = db.categories.filter(c => c.id !== id);
        db.products = db.products.map(product => {
            if (product.categoryId === id) return {
                ...product,
                categoryId: null
            }
            else return product;
        })

        return true;
    },
    deleteProduct: (parent, { id }, { db }) => {
        db.products = db.products.filter(product => product.id !== id);
        db.reviews = db.reviews.filter(review => review.id !== id);

        return true;
    },
    deleteReview: (parent, { id }, { db }) => {
        db.reviews = db.reviews.filter(review => review.id !== id);
        return true;
    },
    updateCategory: (parent, { id, input }, { db }) => {
        const indexCategory = db.categories.findIndex(category => category.id === id);
        if (indexCategory === -1) return null;
        db.categories[indexCategory] = {
            ...db.categories[indexCategory],
            ...input
        }

        return db.categories[indexCategory];
    },
    updateProduct: (parent, { id, input }, { db }) => {
        const indexProduct = db.products.findIndex(product => product.id === id);
        if (indexProduct === -1) return null;
        db.products[indexProduct] = {
            ...db.products[indexProduct],
            ...input
        }

        return db.products[indexProduct];
    },
    updateReview: (parent, { id, input }, { db }) => {
        const indexReview = db.reviews.findIndex(review => review.id === id);
        if (indexReview === -1) return null;
        db.reviews[indexReview] = {
            ...db.reviews[indexReview],
            ...input
        }

        return db.reviews[indexReview];
    }
}