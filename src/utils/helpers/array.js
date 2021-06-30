/**
 * [getObjetIndexByKey Return the index of the first object that contain a key equal to a value in an array]
 * @param  {array} array [An array of objects]
 * @param  {string} key [The key to test]
 * @param  {string} value [The value to test]
 * @return {int} [The indexOf the first object matching the filter]
 */
export function getObjetIndexByKey(array, key, value) {
    const object = array.filter(item => {
        return item[key] === value;
    })[0];
    return array.indexOf(object);
}