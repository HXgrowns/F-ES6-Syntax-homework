
const parseData = ({ data, column }) => {

    let output = [];
    data.map(it => {
        let obj = {}
        for (let index = 0; index < column.length; index++) {
            obj[column[index].name] = it[index];
        }
        output.push(obj);
    })
    return output;
}
export { parseData };