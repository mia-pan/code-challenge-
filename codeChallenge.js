/*
  Given that you have an already valid JSON string where the keys are
  all kebab-case, write a function that takes in this JSON string and
  returns a JSON string where all the keys are transformed to be camelCase.
*/

const exampleJson = `{
    "first-name": "Jeff",
    "last-name": "Green",
    "address": {
      "city-and-state": "Boston, MA",
      "zip": "12345-1234"
    },
    "pets": [
      {
        "name": "Bruno",
        "pet-gender": "male"
      },
      {
        "name": "Lana",
        "pet-gender": "female"
      }
    ]
  }`;
  
  function transformKebabCaseToCamelCase(data) {
    // Example is that if I was passed '{"first-name": "Fred"}', the result
    // should be '{"firstName": "Fred"}'
  }
  
  const result = transformKebabCaseToCamelCase(exampleJson);
  console.log(result);
  