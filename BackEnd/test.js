curl -X POST localhost:2000/users --data '{"email": "admin@bellus.com,"password": "123456","permission": "admin"}' -H "Content-Type: application/json; charset=utf-8"

curl -i -X POST -H "Content-Type:application/json" localhost:2000/students -d '{
  "email": "admin@bellus.com",
  "password":"123456",
  "permission": "admin"
    }'


curl -i -X POST -H "Content-Type:application/json" localhost:2000/products -d '{
  "category": "pojke",
  "subCategory1":"Festkläder",
  "subCategory2": "",
  "name": "julkläder",
  "description":"Festkläder pussar för jul",
  "material": "cotton",
  "brand":"bulles",
  "size": "110",
  "color": "röd",
  "price":149.00,
  "isRea":true,
  "reaPrice":100.00,
  "imagePath": "<img src='baby.png'>",
  "bigImagePath": "<img src='baby_big.png'>",
  "icon1": "",
  "icon2": "",
  "icon3": ""
    }'
