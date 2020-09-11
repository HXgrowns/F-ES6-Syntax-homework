
const parseData = ({ data, column }) => {

    let output = [];
    data.map(it => {
        let obj = {};
        it.forEach((element,index) => {
            obj[column[index].name] = it[index];
        });
        output.push(obj);
    })
    return output;
}
export { parseData };