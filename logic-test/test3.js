/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function result(data) {
  Object.keys(obj).forEach(key => {
    let value = obj[key];
    let hasProperties = value && Object.keys(value).length > 0;
    if (value === null || value === undefined) {
      delete obj[key];
    }
    else if ((typeof value !== "string") && hasProperties) {
      result(value);
    }
  });
  return obj;
}

console.log(result(data));
