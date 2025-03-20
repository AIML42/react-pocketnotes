export const getNotes = (notes, groupId) => {
    return notes.filter((note) => note.groupId === groupId);
}