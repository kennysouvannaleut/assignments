# URL Parameters - are paramenters whose values are set dynamically in a pages URL.

# Ports of a URL
    * Base - http://amazon.com
    * Endpoint - http://amazon.com/images
    * Parameter - http://amazon.com/images/<idNumber>
    * Query

# URL Queries

    # Query string - (typically to filter criteria/results)
        * Begins with "?"
        * Built of key-value pairs
        * Multiple queries seperated by the "&" for each/key value pair.

# Middleware - code that sits in between (in the middle of) the incoming request to the server and the outgoing response back to the client.

    # What is it? 
        * app.use()
        1. (optional) - Mount path ( endpoint )
        2. Callback function - receives the request, response objects, also the "next" function.

    # The "next" function
        * Moves on the middleware in line our server.

# Console Errors in Express

    # Use A Logger
        * npm install morgan

# Connecting the Frond-end to the Back-end

    # Folder Structure 
    # Proxy => (i.e., "proxy": "http:localhost:9000")

# Status Codes

    # 200 - Successful Request
    # 201 - Successful Insert / Successful Update
    # 401 - Unathorized
    # 404 - Not Found
    # 500 - Server Error
    
    # https://http.cat

# MongoDB Overview

    # Two types of database structures
        * Relational (SQL) / Comprised of a number of tables
        * Non-Relational (NoSQL) / Collection of documents

    # Operators
        * $inc
        * $regex
        * $pull
        * where
        * exec

# Introduction to Mongoose

    # Purpose 
        * Create models
        * Query data

    # Connect
        * npm install mongoose

    # Mongoose Schemas
        * Blueprints for the data

    # Mongoose Models
        * Models have a Name, and a Blueprint (Schema)
        * Models are used tp perform the CRUD operations on data created with the Model

# Git Collaboration

    # git branch
    # git checkout
    # git merge

# Start the Repo, clone master

    1. Create git respository on github
    2. Connect/clone locally
    3. Set up the code base
        - git add -A
        - git commit -m "initial commit"
        - git push
    - - - - - -  - - - - - - -  - - - - - - - 
    4. Clone the repository 
        - git clone <posted command github>
    5. Create a feature branch
        - git branch server-setup
    6. Checkout to that branch
        - git checkout server-setup
    7. Commit and push branch to github
        - git add -A
        - git commit -m "initial commit"
        - git push
    8. Git checkout master
    9. Pull down remote master
        - git pull
    10. Checkout back to local branch
        - git checkout <branch name> server-setup
    11. Merge local master into local branch
        - git merge --n-ff master
        - (if goes well)
            - shift + ZZ
        - (if it goes badly)
            - Resolve conflicts locally
    12. Push branch to github
        - git add -A
        - git commit -m "initial commit"
        - git push
    13. Create PR on github
    14. Git checkout to master & git pull
