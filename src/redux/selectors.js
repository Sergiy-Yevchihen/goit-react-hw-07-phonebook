import { createSelector } from 'reselect';

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;



export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, currentFilter) => {
    const visibleContacts = contacts.items.filter(el =>
      el.name.toLowerCase().includes(currentFilter.toLowerCase())
    );
    return visibleContacts;
  }
);
