import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import { Grid, Container } from "@mui/material";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = useState(contactsJSON);

  const addContact = (dataContact) => {
    const newContacts = [...contacts, dataContact];
    setContacts(newContacts);
  };

  return (
    <div className="App">
      <Header />
      <Container sx={{ pt: 10 }} maxWidth={false}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <ContactForm addContact={addContact} />
          </Grid>
          <Grid item md={6} align="left">
            {contacts.map((contact, i) => (
              <Contact key={i} data={contact} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;