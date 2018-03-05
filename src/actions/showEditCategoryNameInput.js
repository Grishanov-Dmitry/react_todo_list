
export default (value, id) => {
    return {
        type: 'SHOW_CHANGE_CATEGORY_NAME_INPUT',
        selectCategoryValue: value,
        selectCategoryId: id

    }
}
