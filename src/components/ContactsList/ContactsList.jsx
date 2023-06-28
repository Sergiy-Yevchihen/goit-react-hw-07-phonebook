import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { TbPoint } from 'react-icons/tb';

import {
  ItemContacts,
  ListContacts,
  ButtonDelete,
} from './ContactsList.styled';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ListContacts>
      {contacts.map(({ name, number, id }) => (
        <ItemContacts key={id}>
          <TbPoint />
          {name}: {number}
          <ButtonDelete
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </ButtonDelete>
        </ItemContacts>
      ))}
    </ListContacts>
  );
};

export default ContactsList;
