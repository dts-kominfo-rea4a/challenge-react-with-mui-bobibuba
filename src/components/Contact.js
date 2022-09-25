// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import {List, ListItem, Divider, Typography, Avatar, ListItemAvatar, ListItemText} from '@mui/material';
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({data}) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar src={data.photo} sx={{ width: 65, height: 65 }} />
            </ListItemAvatar>
            <ListItemText style={{textAlign:'left', marginTop:'0.7em' ,marginLeft:'1.5em'}}>
                <Typography>{data.name}</Typography>
                <Typography color="text.secondary">{data.phone}</Typography>
                <Typography color="text.secondary">{data.email}</Typography>
            </ListItemText>
        </ListItem>
        <Divider variant="inset" component="li" />
        </List>   
    );
};

export default Contact;

