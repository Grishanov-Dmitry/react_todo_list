export default (categId, id) => {
    return {
        type: 'EDIT_TODO',
        categId: categId,
        id: id
    }
}
