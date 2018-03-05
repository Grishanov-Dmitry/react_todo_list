
export default (name, discription) => {
    return {
        type: 'ADD_NEW_ITEM',
        newItemIname: name,
        newItemValue: discription
    }
}
