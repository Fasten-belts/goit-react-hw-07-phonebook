import React, { useEffect } from 'react';
import { Layout } from './Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsError, selectIsLoading } from 'redux/selectors';
import { Loader } from './Loader /Loader';
import toast, { Toaster } from 'react-hot-toast';
import { fetchContacts } from 'redux/operations';

function App() {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <ContactForm />
      {isLoading && <Loader />}
      {isError &&
        toast.error('Error please try one more time', {
          icon: '🚨',
        })}
      <Filter />
      <ContactList />
      <Toaster position="top-right" reverseOrder={true} />
    </Layout>
  );
}

export { App };
