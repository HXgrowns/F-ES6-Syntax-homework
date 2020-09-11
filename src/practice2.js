const inject = (items, sections) => {
    sections.forEach(({ content, index }, id) => {
        items.splice(index + id, 0, content);
    });
    return items;
}
export { inject };
