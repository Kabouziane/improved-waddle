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
                console.log('Fetching categories from:', `${this.apiUrl}/categories/`);
                const response = await axios.get(`${this.apiUrl}/categories/`);
                console.log('Categories response:', response.data);
                this.categories = response.data;
            } catch (error) {
                console.error('Error fetching categories:', error);
                console.error('Error details:', error.response);
            }
        },
        async fetchProducts() {
            try {
                console.log('Fetching products from:', `${this.apiUrl}/products/`);
                const response = await axios.get(`${this.apiUrl}/products/`);
                console.log('Products response:', response.data);
                this.products = response.data;
            } catch (error) {
                console.error('Error fetching products:', error);
                console.error('Error details:', error.response);
            }
        },
        async addCategory() {
            if (!this.newCategory.name.trim()) {
                alert('Please enter a category name');
                return;
            }
            
            try {
                const response = await axios.post(`${this.apiUrl}/categories/`, this.newCategory);
                console.log('Category added:', response.data);
                this.newCategory.name = '';
                this.fetchCategories();
            } catch (error) {
                console.error('Error adding category:', error);
                alert('Error adding category: ' + (error.response?.data?.detail || error.message));
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
            if (!this.newProduct.name.trim() || !this.newProduct.price || !this.newProduct.category) {
                alert('Please fill in all required fields');
                return;
            }
            
            try {
                const response = await axios.post(`${this.apiUrl}/products/`, this.newProduct);
                console.log('Product added:', response.data);
                this.newProduct = { name: '', price: '', stock: '', category: '' };
                this.fetchProducts();
            } catch (error) {
                console.error('Error adding product:', error);
                alert('Error adding product: ' + (error.response?.data?.detail || error.message));
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