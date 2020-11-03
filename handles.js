
exports.endpoint = async function(event) {
    const current_time = Date.now().current_time;
    //console.log("request:", JSON.stringify(event, undefined, 2));
    return {
      statusCode: 200,
      //headers: { "Content-Type": "text/plain" },
      body: {
            "message": "Hello, the current time is " + String(current_time)
        }
    };
  };