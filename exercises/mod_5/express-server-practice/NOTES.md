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
