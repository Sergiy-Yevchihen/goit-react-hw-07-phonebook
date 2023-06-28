import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filter } from 'redux/contactsSlice';

import { Wrapper, LabelForm, InputForm } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilter);

  return (
    <Wrapper>
      <LabelForm>
        Find contact by name
        <InputForm
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={e => dispatch(filter(e.currentTarget.value.trim()))}
          value={currentFilter}
        />
      </LabelForm>
    </Wrapper>
  );
};

export default Filter;
