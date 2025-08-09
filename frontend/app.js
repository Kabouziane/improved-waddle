const { createApp } = Vue;

createApp({
    data() {
        return {
            categories: [],
            products: [],
            newCategory: {
                name: ''
            },
            newProduct: {
                name: '',
                price: '',
                stock: '',
                category: ''
            },
            apiUrl: 'http://127.0.0.1:8000/api'
        }
    },
    mounted() {
        this.fetchCategories();
        this.fetchProducts();
    },
    methods: {
        async fetchCategories() {
            try {
                const response = await axios.get(`${this.apiUrl}/categories/`);
                this.categories = response.data;
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        },
        async fetchProducts() {
            try {
                const response = await axios.get(`${this.apiUrl}/products/`);
                this.products = response.data;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        async addCategory() {
            if (!this.newCategory.name.trim()) return;
            
            try {
                await axios.post(`${this.apiUrl}/categories/`, this.newCategory);
                this.newCategory.name = '';
                this.fetchCategories();
            } catch (error) {
                console.error('Error adding category:', error);
            }
        },
        async deleteCategory(id) {
            try {
                await axios.delete(`${this.apiUrl}/categories/${id}/`);
                this.fetchCategories();
                this.fetchProducts(); // Refresh products in case any were affected
            } catch (error) {
                console.error('Error deleting category:', error);
            }
        },
        async addProduct() {
            if (!this.newProduct.name.trim() || !this.newProduct.price || !this.newProduct.category) return;
            
            try {
                await axios.post(`${this.apiUrl}/products/`, this.newProduct);
                this.newProduct = { name: '', price: '', stock: '', category: '' };
                this.fetchProducts();
            } catch (error) {
                console.error('Error adding product:', error);
            }
        },
        async deleteProduct(id) {
            try {
                await axios.delete(`${this.apiUrl}/products/${id}/`);
                this.fetchProducts();
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
    }
}).mount('#app');