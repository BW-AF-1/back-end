# END POINTS

```bash

/GET api/instructor
const instructor = {
        "id": 1,
        "username": "MarkRipper1",
        "password": "test"
    },
   ...

/GET api/clients
const clients = {
        "id": 1,
        "username": "timSmith",
        "password": "test"
    },
    ...

/GET api/classes
const clases =     {
        "id": 1,
        "name": "Get Ripped 100",
        "type": "Pump Me Up",
        "startTime": "4 PM",
        "duration": "1 hr",
        "intensityLevel": "Easy",
        "location": "Seattle, Wa",
        "attendees": 11,
        "maxClassSize": 20,
        "instructor_id": 1
    },
    ...

/POST api/clients/register
const clients = { 
    username: ,
     password:  }

/POST api/instructors/register
const instructor = { 
    username: ,
     password:  }

/POST api/clients/signin
const clients = { 
    username: ,
     password:  }

/POST api/instructors/signin
const instructor = {
    username: ,
     password:  }