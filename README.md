## ERD

![ERD](https://user-images.githubusercontent.com/114371403/202892582-71779c27-1b92-4066-b026-7d1c2acaa446.png)

## User

### User Collection

| Atribut      | Tipe Data   | defaul      |Deskripsi|
| ----------- | -----------  |----------- |----------- |
| nama      | string       |null|nama pengguna akun|
| username      | string       |null|untuk login dan autentikasi
| password      | string       |null|untuk login dan autentikasi

### Register User

Request :
* Method : POST
* Endpoint : /regis
* Header :
    * Content-Type : application/json
    * Accept : application/json
* Body :
```json
{
  "nama":"string",
  "username":"string",
  "password":"string"
}
```
- Response :
```json
{
  "_id": "string",
  "nama": "string",
  "username": "string",
  "password": "string",
  "createdAt": "date",
  "__v": "number"
}
```
### Login
Request :
* Method : POST
* Endpoint : /login
* Header : 
  * Content-Type : application/json
  * Accept : application/json
* Body :
```json
{
  "username":"string",
  "password":"string"
}
```
* Respone :
```json
{
  "token":"string"
}
```

## Admin

### Admin Collection

| Atribut      | Tipe Data   | defaul      |Deskripsi|
| ----------- | -----------  |----------- |----------- |
| username      | string       |null|untuk login dan autentikasi
| password      | string       |null|untuk login dan autentikasi

### Login
Request :
* Method : POST
* Endpoint : /adminlogin
* Header : 
  * Content-Type : application/json
  * Accept : application/json
* Body :
```json
{
  "username":"string",
  "password":"string"
}
```
* Respone :
```json
{
  "token":"string"
}
```

## Artikel

### Artikel Collection

| Atribut      | Tipe Data   | defaul      |Deskripsi|
| ----------- | -----------  |----------- |----------- |
| judul      | string       |null|untuk login dan autentikasi
| isi      | string       |null|untuk login dan autentikasi

### Get All Artikel Data
Request :
* Method : GET
* Endpoint : /utama
* Header : 
  * Content-Type : application/json
  * Accept : application/json
  * auth-token : jwt/token
* Respone :
```json
[
  {
    "_id": "string",
    "judul": "string",
    "isi": "string",
    "__v": "number"
  }
]
```

### Add Artikel Data
Request :
* Method : POST
* Endpoint : /tambah
* Header : 
  * Content-Type : application/json
  * Accept : application/json
  * auth-token : jwt/token
* Body :
```json
{
  "judul": "string",
  "isi": "string"
}
```
* Respone :
```json
{
  "_id": "string",
  "judul": "string",
  "isi": "string",
}
```

## Update Artikel Data
Request :
* Method : PUT
* Endpoint : /admin/:id
* Header : 
  * Content-Type : application/json
  * Accept : application/json
  * auth-token : jwt/token
* Body :
```json
{
  "judul":"string",
  "isi": "string"
}
```
* Respone :
```json
{
  "judul":"string",
  "isi": "string"
}
```

## Delete Artikel Data
Request :
* Method : DELETE
* Endpoint : /admin/:id
* Header : 
  * Content-Type : application/json
  * Accept : application/json
  * auth-token2 : jwt/token
* Respone :
```json
{
  "deleteObjectId": "string"
}
```
