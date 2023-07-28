<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#database-structure">Database Structure</a>
    </li>
    <li>
      <a href="#api-structure">API Structure</a>
    </li>
    <li>
      <a href="#api-request-and-response">API Request and Response</a>
    </li>
    <li>
      <a href="#how-to-run">How to Run</a>
    </li>
  </ol>
</details>

# Database Structure

## Video

| Field             | Type            | Required | Default | Ref     |
| ----------------- | --------------- | -------- | ------- | ------- |
| \_id              | ObjectId        |          |         |         |
| urlImageThumbnail | String          | Yes      |         |         |
| comments          | Array(Comment)  |          |         |         |
| productIds        | Array(ObjectId) |          |         | Product |

## Comment

| Field     | Type   | Required | Default                       | Ref |
| --------- | ------ | -------- | ----------------------------- | --- |
| username  | String | Yes      |                               |     |
| comment   | String | Yes      |                               |     |
| createdAt | Number |          | Math.floor(Date.now() / 1000) |     |

## Product

| Field | Type     | Required | Default | Ref |
| ----- | -------- | -------- | ------- | --- |
| \_id  | ObjectId |          |         |     |
| title | String   | Yes      |         |     |
| price | Number   | Yes      |         |     |
| url   | String   | Yes      |         |     |

# API Structure

<img src='api-structure.jpg'>

# API Request and Response

## **GET /video/thumbnail**

Returns all video thumbnail

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**
  ```
  {
    "status": "success",
    "data": [{
      video_id: String,
      url_image_thumbnail: String,
    }]
  }
  ```

## **GET /video/:video_id/comment**

Return all comments on a specific video

- **URL Params**  
  _Required:_ `video_id=[String]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**
  ```
  {
    "status": "success",
    "data": [{
      "username": String,
      "comment": String,
      "timestamp": Number
    }]
  }
  ```
- **Error Response:**
  - **Code:** 400  
    **Content:**
    ```
    {
      "status": "fail",
      "message": "invalid id"
    }
    ```
    OR
  - **Code:** 404  
    **Content:**
    ```
    {
      "status": "fail",
      "message": "video not found"
    }
    ```

## **POST /video/:video_id/comment**

Create a comment on a specific video

- **URL Params**  
  _Required:_ `video_id=[String]`
- **Data Params**
  ```
  {
    "username": String,
    "comment": String
  }
  ```
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 201  
  **Content:**
  ```
  {
    "status": "created",
    "data": [{
      "username": String,
      "comment": String,
      "timestamp": Number
    }]
  }
  ```
- **Error Response:**
  - **Code:** 400  
    **Content:**
    ```
    {
      "status": "fail",
      "message": "invalid id"
    }
    ```
    OR
  - **Code:** 400  
    **Content:**
    ```
    {
      "status": "fail",
      "message": "username must be string"
    }
    ```
    OR
  - **Code:** 400  
    **Content:**
    ```
    {
      "status": "fail",
      "message": "username cannot be empty"
    }
    ```
    OR
  - **Code:** 400  
    **Content:**
    ```
    {
      "status": "fail",
      "message": "comment must be string"
    }
    ```
    OR
  - **Code:** 400  
    **Content:**
    ```
    {
      "status": "fail",
      "message": "comment cannot be empty"
    }
    ```
    OR
  - **Code:** 404  
    **Content:**
    ```
    {
      "status": "fail",
      "message": "video not found"
    }
    ```

## **GET /video/:video_id/product**

Return all products on a specific video

- **URL Params**  
  _Required:_ `video_id=[String]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**
  ```
  {
    "status": "success",
    "data": [{
        "product_id": String,
        "link_product": String,
        "title": String,
        "price": Number
    }]
  }
  ```
- **Error Response:**
  - **Code:** 400  
    **Content:**
    ```
    {
      "status": "fail",
      "message": "invalid id"
    }
    ```
    OR
  - **Code:** 404  
    **Content:**
    ```
    {
      "status": "fail",
      "message": "video not found"
    }
    ```

# How to Run

1. <a href='https://www.mongodb.com/docs/manual/administration/install-community/'>Install and run mongoDB</a>
2. Clone this repository
3. Open terminal
4. Go to repository directory
5. Install all packages

```
npm install
```

6. Run the app

```
npm run start
```
