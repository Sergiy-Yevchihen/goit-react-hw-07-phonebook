export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = state => {
  const { items } = selectContacts(state);
  const currentFilter = selectFilter(state);

  const visibleContacts = items.filter(el =>
    el.name.toLowerCase().includes(currentFilter.toLowerCase())
  );
  return visibleContacts;
};
