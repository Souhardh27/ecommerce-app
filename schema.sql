json
// products collection
{
  "_id": "ObjectId",
  "name": "String",
  "description": "String",
  "price": "Number",
  "image": "String",
  "category": "String"
}

// users collection
{
  "_id": "ObjectId",
  "username": "String",
  "email": "String",
  "password": "String"
}

// carts collection
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "products": [
    {
      "productId": "ObjectId",
      "quantity": "Number"
    }
  ]
}

// orders collection
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "products": [
    {
      "productId": "ObjectId",
      "quantity": "Number"
    }
  ],
  "total": "Number",
  "date": "Date"
}