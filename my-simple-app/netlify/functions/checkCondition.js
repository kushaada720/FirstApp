// This is our serverless function code in netlify/functions/checkCondition.js

exports.handler = async function(event, context) {
  // 1. Get the current date and time.
  const now = new Date();
  const minutes = now.getMinutes();

  // 2. This is our "condition": check if the minute is an even number.
  const isConditionMet = (minutes % 2 === 0);
  let message = "";

  if (isConditionMet) {
    message = "✅ Yes! The condition is currently met (the minute is even).";
  } else {
    message = "❌ Nope, the condition is not met (the minute is odd).";
  }

  // 3. Send the response back to the front end in JSON format.
  return {
    statusCode: 200, // This means "OK"
    body: JSON.stringify({
      conditionMet: isConditionMet,
      message: message
    }),
  };
};