export class Blog{
  constructor(data) {
  this.id = data.id
  this.title = data.title
  this.body = data.body
  this.imgUrl = data.imgUrl
  this.published = data.published
  this.creatorId = data.creatorId
  this.createdAt = new Date(data.createdAt)
  this.updatedAt = new Date(data.updatedAtAt)
  this.creator = data.creator  
  }
}

const data = {
  "_id": "6622043611e26365c7f70ef3",
  "title": "Modern Atrocities",
  "body": "👁️👄👁️",
  "imgUrl": "https://i.redd.it/9paehzybykh71.jpg",
  "tags": [],
  "published": true,
  "creatorId": "660c5f4b55f94158e69b7959",
  "createdAt": "2024-04-19T05:42:14.361Z",
  "updatedAt": "2024-04-19T05:42:14.361Z",
  "__v": 0,
  "creator": {
      "_id": "660c5f4b55f94158e69b7959",
      "subs": [
          "auth0|660c5f4a4451a899ec19d037"
      ],
      "email": "emmawood.coding@gmail.com",
      "name": "ʕ✪㉨✪ʔ",
      "picture": "https://wallpapers.com/images/hd/bratz-face-meme-pfp-84nsvbw56x2tpnfz.jpg",
      "bio": "( º◞ل͟◟º) Hi",
      "coverImg": "https://wallpaperaccess.com/full/9095164.png",
      "github": "https://github.com/ewood-coder",
      "linkedin": "https://www.linkedin.com/in/emma-wood-341ba1210/",
      "resume": "",
      "class": "Spring 2024",
      "graduated": false,
      "createdAt": "2024-04-02T19:41:05.557Z",
      "updatedAt": "2024-04-22T15:49:55.057Z",
      "__v": 0,
      "id": "660c5f4b55f94158e69b7959"
  },
  "id": "6622043611e26365c7f70ef3"
}