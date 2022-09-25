// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
} from "@mui/material";

const ContactForm = ({ addContact }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState({
        name: "",
        phone: "",
        email: "",
        photo: "",
      });
    
      const inputHandler = (e) => {
        setNewContact({ ...newContact, [e.target.name]: e.target.value });
      };
    
      const submitHandler = (event) => {
        event.preventDefault();
        addContact(newContact);
        setNewContact({ name: "", phone: "", email: "", photo: "" });
      };

    return (
            <form onSubmit={submitHandler}>
            <Card sx={{ bgcolor: 'background.paper', minWidth: 250 }}>
                <CardContent>
                <TextField
                    id="outlined-basic fullwidth"
                    label="Name *"
                    variant="outlined"
                    margin="normal"
                    name="name"
                    value={newContact.name}
                    onChange={inputHandler}
                    fullWidth
                    color="success"
                />
                <TextField
                    id="outlined-basic fullwidth"
                    label="Phone *"
                    variant="outlined"
                    margin="normal"
                    name="phone"
                    value={newContact.phone}
                    onChange={inputHandler}
                    fullWidth
                    color="success"
                />
                <TextField
                    id="outlined-basic fullwidth"
                    label="Email *"
                    variant="outlined"
                    margin="normal"
                    name="email"
                    value={newContact.email}
                    onChange={inputHandler}
                    fullWidth
                    color="success"
                />
                <TextField
                    id="outlined-basic fullwidth"
                    label="Photo URL *"
                    variant="outlined"
                    margin="normal"
                    name="photo"
                    value={newContact.photo}
                    onChange={inputHandler}
                    fullWidth
                    color="success"
                />
                </CardContent>
                <CardActions>
                <Button type="submit">Add New</Button>
                </CardActions>
            </Card>
            </form>
    );
}

export default ContactForm;