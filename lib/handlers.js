// Define all the handlers
const handlers = {};

// Ping handler
handlers.ping = function(data,callback){
    callback(200);
};

// Sample handler
handlers.sample = function(data,callback){
    callback(406,{'name':'sample handler'});
};

// Not found handler
handlers.notFound = function(data,callback){
  callback(404);
};


// Export the handlers
module.exports = handlers;