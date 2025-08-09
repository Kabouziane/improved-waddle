import requests
import json

# Test Django API endpoints
base_url = "http://127.0.0.1:8000/api"

def test_api():
    try:
        # Test categories endpoint
        print("Testing categories endpoint...")
        response = requests.get(f"{base_url}/categories/")
        print(f"Categories GET: {response.status_code}")
        print(f"Response: {response.text}")
        
        # Test adding a category
        print("\nTesting add category...")
        category_data = {"name": "Test Category"}
        response = requests.post(f"{base_url}/categories/", json=category_data)
        print(f"Category POST: {response.status_code}")
        print(f"Response: {response.text}")
        
        # Test products endpoint
        print("\nTesting products endpoint...")
        response = requests.get(f"{base_url}/products/")
        print(f"Products GET: {response.status_code}")
        print(f"Response: {response.text}")
        
    except requests.exceptions.ConnectionError:
        print("Error: Cannot connect to Django server. Make sure it's running on port 8000.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    test_api()