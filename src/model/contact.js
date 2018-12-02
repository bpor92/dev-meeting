const person = {
    "results": [
      {
        favourite: false,
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "rolf",
          "last": "hegdal"
        },
        "location": {
          "street": "ljan terrasse 346",
          "city": "vear",
          "state": "rogaland",
          "postcode": "3095",
          "coordinates": {
            "latitude": "54.8646",
            "longitude": "-97.3136"
          },
          "timezone": {
            "offset": "-10:00",
            "description": "Hawaii"
          }
        },
        "email": "rolf.hegdal@example.com",
        "login": {
          "uuid": "111",
          "username": "bluefrog786",
          "password": "ingrid",
          "salt": "GtRFz4NE",
          "md5": "5c581c5748fc8c35bd7f16eac9efbb55",
          "sha1": "c3feb8887abed9ec1561b9aa2c9f58de21d1d3d9",
          "sha256": "684c478a98b43f1ef1703b35b8bbf61b27dbc93d52acd515e141e97e04447712"
        },
        "dob": {
          "date": "1975-11-12T06:34:44Z",
          "age": 42
        },
        "registered": {
          "date": "2015-11-04T22:09:36Z",
          "age": 2
        },
        "phone": "66976498",
        "cell": "40652479",
        "id": {
          "name": "FN",
          "value": "12117533881"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/65.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/65.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/61.jpg"
        },
        "nat": "NO"
      },
      {
        favourite: false,
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "bartek",
          "last": "hegdal"
        },
        "location": {
          "street": "ljan terrasse 346",
          "city": "vear",
          "state": "rogaland",
          "postcode": "3095",
          "coordinates": {
            "latitude": "54.8646",
            "longitude": "-97.3136"
          },
          "timezone": {
            "offset": "-10:00",
            "description": "Hawaii"
          }
        },
        "email": "fsdf.fsdfsdf@example.com",
        "login": {
          "uuid": "222",
          "username": "bluefrog786",
          "password": "ingrid",
          "salt": "GtRFz4NE",
          "md5": "5c581c5748fc8c35bd7f16eac9efbb55",
          "sha1": "c3feb8887abed9ec1561b9aa2c9f58de21d1d3d9",
          "sha256": "684c478a98b43f1ef1703b35b8bbf61b27dbc93d52acd515e141e97e04447712"
        },
        "dob": {
          "date": "1975-11-12T06:34:44Z",
          "age": 42
        },
        "registered": {
          "date": "2015-11-04T22:09:36Z",
          "age": 2
        },
        "phone": "213123123",
        "cell": "40652479",
        "id": {
          "name": "FN",
          "value": "12117533881"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/65.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/65.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/62.jpg"
        },
        "nat": "NO"
      },
      {
        "favourite": true,
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "Asia",
          "last": "hegdal"
        },
        "location": {
          "street": "ljan terrasse 346",
          "city": "vear",
          "state": "rogaland",
          "postcode": "3095",
          "coordinates": {
            "latitude": "54.8646",
            "longitude": "-97.3136"
          },
          "timezone": {
            "offset": "-10:00",
            "description": "Hawaii"
          }
        },
        "email": "r312321312@example.com",
        "login": {
          "uuid": "c3333",
          "username": "bluefrog786",
          "password": "ingrid",
          "salt": "GtRFz4NE",
          "md5": "5c581c5748fc8c35bd7f16eac9efbb55",
          "sha1": "c3feb8887abed9ec1561b9aa2c9f58de21d1d3d9",
          "sha256": "684c478a98b43f1ef1703b35b8bbf61b27dbc93d52acd515e141e97e04447712"
        },
        "dob": {
          "date": "1975-11-12T06:34:44Z",
          "age": 42
        },
        "registered": {
          "date": "2015-11-04T22:09:36Z",
          "age": 2
        },
        "phone": "423423423",
        "cell": "40652479",
        "id": {
          "name": "FN",
          "value": "12117533881"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/65.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/65.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/63.jpg"
        },
        "nat": "NO"
      },
    ],
    all() {
      return this.results;
    },
    get(id) {
      const contact = p => p.login.uuid === id
      return this.results.find(contact);
    }

  }

  export default person;