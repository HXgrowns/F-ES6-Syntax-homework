
const parseData = ({ data, column }) => {
    // TODO 使用map做数组与数组的转化，不用声明output，查查map的使用
    let output = [];
    data.map(it => {
        let obj = {};
        it.forEach((element,index) => {
            // TODO it[index]不就是element吗？
            obj[column[index].name] = it[index];
        });
        output.push(obj);
    })
    return output;
}
export { parseData };