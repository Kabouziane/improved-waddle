import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'store_manager.settings')
django.setup()

from store.models import Category, Product

# Create test data
def create_test_data():
    # Create categories
    electronics = Category.objects.create(name="Electronics")
    books = Category.objects.create(name="Books")
    
    # Create products
    Product.objects.create(
        name="Laptop",
        price=999.99,
        stock=10,
        category=electronics
    )
    
    Product.objects.create(
        name="Python Book",
        price=29.99,
        stock=50,
        category=books
    )
    
    print("Test data created successfully!")
    print(f"Categories: {Category.objects.count()}")
    print(f"Products: {Product.objects.count()}")

if __name__ == "__main__":
    create_test_data()