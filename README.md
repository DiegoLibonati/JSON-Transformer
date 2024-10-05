# JSON Transformer

## Getting Started

1. Clone the repository with `git clone "repository link"`
2. Go to the folder where you cloned your repository
3. Run `docker-compose build --no-cache` in the terminal
4. Once built, you must execute the command: `docker-compose up`
5. You have to be standing in the folder containing the: `docker-compose.yml`

## Description

This project aims to automate the creation and/or translation of new JSON files by leveraging an existing JSON file. The core idea and functionality involve extracting the values from the keys of the old JSON to reuse them when creating a new JSON. Additionally, it allows saving the structure of the new JSON to reuse the values from different old JSON files. This enables automation, simplifying the process of translating or generating new JSON structures.

## Technologies used

FrontEnd:

1. React
2. Typescript
3. TailwindCSS
4. CSS3
5. HTML5

BackEnd:

1. NodeJS
2. Typescript

Deploy:

1. Docker

Database:

1. SQL - Postgres

## Libraries used

FrontEnd:

1. Monaco Editor
2. Monaco Editor React
3. Axios
4. React Icons
5. React Router Dom
6. Vite

BackEnd:

1. Express
2. Multer
3. Prisma
4. Nodemon
5. Vite

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/JSON-Transformer`](https://www.diegolibonati.com.ar/#/project/JSON-Transformer)

## Video

https://github.com/user-attachments/assets/17fdb19c-e914-4127-976d-78d287afe2e1

## Documentation APP

### **Version**

```ts
APP VERSION: 0.0.1
README UPDATED: 05/10/2024
AUTHOR: Diego Libonati
```

### **Env Keys**

NOTE: You must create two .env, one for the client called `client.env` and one for the api called `api.env` both inside the json-config folder.

1. `VITE_API_URL`: Refers to the API URI
2. `VITE_API_PREFIX`: Refers to the prefix where API endpoints are used.
3. `PORT`: Refers to the port on which the API is exposed.
4. `DATABASE_URL`: Refers to the database connection URI

```ts
# Frontend Envs -> client.env
VITE_API_URL=http://api:3000
VITE_API_PREFIX=/api/v1

# Backend Envs -> api.env
PORT=3000
DATABASE_URL=postgresql://root:admin@db:5432/jsondb?schema=public
```

### **JSON Transformer Endpoints API**

---

- **Endpoint Name**: GetJsonInputs
- **Endpoint Method**: GET
- **Endpoint Prefix**: /api/v1/json/inputs
- **Endpoint Fn**: This endpoint obtains all the Input Jsons
- **Endpoint Params**: None

---

- **Endpoint Name**: GetJsonInput
- **Endpoint Method**: GET
- **Endpoint Prefix**: /api/v1/json/input/:id
- **Endpoint Fn**: This endpoint obtains a Json Input through an id given by params
- **Endpoint Params**:

```ts
{
  id: string;
}
```

---

- **Endpoint Name**: GetJsonOutputs
- **Endpoint Method**: GET
- **Endpoint Prefix**: /api/v1/json/outputs
- **Endpoint Fn**: This endpoint obtains all the Output Jsons
- **Endpoint Params**: None

---

- **Endpoint Name**: GetJsonOutput
- **Endpoint Method**: GET
- **Endpoint Prefix**: /api/v1/json/output/:id
- **Endpoint Fn**: This endpoint obtains a Json Output through an id given by params
- **Endpoint Params**:

```ts
{
  id: string;
}
```

---

- **Endpoint Name**: UploadJson
- **Endpoint Method**: POST
- **Endpoint Prefix**: /api/v1/json/upload
- **Endpoint Fn**: This endpoint is used to upload a Json Input and then use its values to translate or create a new Json.
- **Endpoint Body**:

```ts
{
  name: string;
  file: File;
  content: string;
}
```

---

- **Endpoint Name**: GetFileContent
- **Endpoint Method**: POST
- **Endpoint Prefix**: /api/v1/json/getContent
- **Endpoint Fn**: This endpoint is used to obtain the content of a Json file.
- **Endpoint Body**:

```ts
{
  file: File;
}
```

---

- **Endpoint Name**: TransformJson
- **Endpoint Method**: POST
- **Endpoint Prefix**: /api/v1/json/transform
- **Endpoint Fn**: This endpoint is used to translate a Json of type Output thanks to the values of the keys of an Input Json. It also downloads the Json file to be able to use it. You can also save the Output Json structure for future translations or new Json through the same type of Input Json used but with different or the same values.
- **Endpoint Body**:

```ts
{
  idInputJson: string;
  saveOutputJson: boolean;
  outputJsonNameToSave: string;
  contentJsonToTransform: string;
}
```
