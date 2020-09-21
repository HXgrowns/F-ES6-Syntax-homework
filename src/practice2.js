// TODO 逻辑纰漏，当sections内items顺序不是index顺序时会有问题
const inject = (items, sections) => {
    // TODO 第二个参数不要取名id
    sections.forEach(({ content, index }, id) => {
        items.splice(index + id, 0, content);
    });
    return items;
}
export { inject };
