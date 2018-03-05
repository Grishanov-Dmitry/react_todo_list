
export default (newName, newDiscription) => {
    return {
        type: 'SAVE_ITEM_CHANGES',
        newName: newName,
        newDiscription: newDiscription
    }
}
