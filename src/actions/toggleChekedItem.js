
export default (categId, id) => {
    return {
        type: 'TOGGLE_CHECKED_ITEM',
        categId: categId,
        id: id
    }
}
