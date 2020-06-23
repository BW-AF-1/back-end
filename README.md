# END POINTS

Add ```https://buildweeknode.herokuapp.com/``` before endpoint 

for example: ```https://buildweeknode.herokuapp.com/api/classes```

# DATA_STRUCTURE

INSTRUCTOR = {
        "id": 1,
        "username": "MarkRipper1",
        "password": "test"
    },

CLIENTS = {
        "id": 1,
        "username": "timSmith",
        "password": "test"
    },

CLASES = {
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

    -Helpful tidbit: ID's are automatically generated that is why you do not need to include them to sign up

```bash

/GET api/instructors
    return instructors

/POST api/instructors/register
    return the instructor that is added

/POST api/instructors/login
    return message string and token

//GET api/instructors/id
    return the instructor of the id 

//GET api/instructors/classes
    return the classes the instructor has

//POST api/instructors/id/classes
    return instructors new class that is being created

//DELETE api/instructors/id
    return id of instructor you want to delete

//PUT api/instructors/id
    return object that is updated



/GET api/clients
    return clients

/POST api/clients/register
    return the client that is added

/POST api/clients/login
    return message string and token

/GET api/clients/id
    return object of id associate with object

//GET api/clients/id/classes/
    return the classes by client ID

//GET api/clients/id
    return the client to be deleted

//PUT api/clients/id
    return the updated client by ID



/GET api/classes
    return classes

//GET api/classes
    return all the classes

//GET api/classes/id
    return id of the class being deleted

//PUT api/classes/id
    return class object being updated

```

TODO: AUTHETICATE AND MAKE api/clients/id/classes/classID - to assign classes to clients