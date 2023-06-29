import React, { useRef, useState, useEffect } from "react";
import CatPeople from './img/cat_people.png';
import { Image } from 'antd';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import PetsIcon from '@mui/icons-material/Pets';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// Manually import images
import img100001 from './img/set1/100001.jpg';
// import img100002 from './img/set1/100002.jpg';
// import img100003 from './img/set1/100003.jpg';
// import img100004 from './img/set1/100004.jpg';
// import img100005 from './img/set1/100005.jpg';
// import img100006 from './img/set1/100006.jpg';
// import img100007 from './img/set1/100007.jpg';
// import img100008 from './img/set1/100008.jpg';
// import img100009 from './img/set1/100009.jpg';
// import img100010 from './img/set1/100010.jpg';
// import img100011 from './img/set1/100011.jpg';
// import img100012 from './img/set1/100012.jpg';
// import img100013 from './img/set1/100013.jpg';
// import img100014 from './img/set1/100014.jpg';
// import img100015 from './img/set1/100015.jpg';
// import img100016 from './img/set1/100016.jpg';
// import img100017 from './img/set1/100017.jpg';
// import img100018 from './img/set1/100018.jpg';
// import img100019 from './img/set1/100019.jpg'; 
// import img100020 from './img/set1/100020.jpg';
// import img100021 from './img/set1/100021.jpg';
// import img100022 from './img/set1/100022.jpg';
// import img100023 from './img/set1/100023.jpg';
// import img100024 from './img/set1/100024.jpg';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}


// const images = [img100001,
//   img100002,
//   img100003,
//   img100004,
//   img100005,
//   img100006,
//   img100007,
//   img100008,
//   img100009,
//   img100010,
//   img100011,
//   img100012,
//   img100013,
//   img100014,
//   img100015,
//   img100016,
//   img100017,
//   img100018,
//   img100019,
//   img100020,
//   img100021,
//   img100022,
//   img100023,
//   img100024,];
function MainPage() {
  
  const [value, setValue] = useState(0);
  const ref = useRef(null); // Define the ref here
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };
  const handleOpen3 = () => {
    setOpen3(true);
  };

  return (
    <>
      <Box sx={{ pb: 1 }} ref={ref}>
        {/* <CssBaseline /> */}
        <div>
          <Image
            src={CatPeople}
            preview={false}
            style={{ width: '100%', objectFit: 'cover' }}
          />
          <Typography variant="h1" component="h2">
          </Typography>
        
        </div>
        {/* <List>
          {messages.map(({ primary, secondary, person }, index) => (
            <ListItem button key={index + person}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={person} />
              </ListItemAvatar>
              <ListItemText primary={primary} secondary={secondary} />
            </ListItem>
          ))}
        </List> */}
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="ทำความรู้จักพี่ขีส" onClick={handleOpen} icon={<PetsIcon />} />
            <BottomNavigationAction label="วีรกรรม" onClick={handleOpen2} icon={<FavoriteIcon />} />
            <BottomNavigationAction label="รูปพี่ชีส" onClick={handleOpen3} icon={<InsertPhotoIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"ทำความรู้จักพี่ชีส"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            พี่ชีสไม่ได้หลุดหนีออกจากห้อง แต่พี่ชีสเคยเป็นแมวจรที่อยู่ที่ตึก S3 มานาน เลยเคยชินกับข้างล่าง แต่ก่อนพี่ชีสโดนกัดมาบ่อยมากๆ และบางทีก็เป็นโรคผิวหนัง เลยเอามารักษาแล้วก็เลยรับพี่ชีสมาเป็นลูกบุญธรรม
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            :
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
           เวลาปล่อยพี่ชีสจะเป็นช่วงเวลาหลังเที่ยงคืน จนถึง 6 โมงเช้า จะปล่อยให้ไปเดินเล่น พี่ชีสมีเพื่อนแมวอยู่ที่บ้านรับฝากรถ แต่บางทีพี่ชีสก็จะเดินกลับมานอนเล่นๆ อยู่แถวป้อมยาม และก็ที่อื่นๆ ใน S3 
          
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            :
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            ถ้าเจอพี่ชีส เล่นกับพี่ชีสได้พี่ชีสไม่ดุ 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
      

      <Dialog
        open={open2}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose2}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"ทำความรู้จักพี่ชีส"}</DialogTitle>
        <DialogContent>
        <ImageList cols={3}>
            {/* {images.map((image, index) => (
                <ImageListItem key={index}>
                    <img src={image} alt={'image' + index} loading="lazy" />
                </ImageListItem>
            ))} */}
            
            <img src={img100001} alt={'image'} loading="lazy" />
        </ImageList>
        {/* <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
        </ImageList> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>OK</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open3}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose3}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"ทำความรู้จักพี่ชีส 3 "}</DialogTitle>
        <DialogContent>
      
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose3}>OK</Button>
        </DialogActions>
      </Dialog>

    </>
  );
}


const messageExamples = [
  {
    primary: 'Brunch this week?',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Birthday Gift',
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    primary: 'Recipe to try',
    secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: '/static/images/avatar/2.jpg',
  },
  {
    primary: 'Yes!',
    secondary: 'I have the tickets to the ReactConf for this year.',
    person: '/static/images/avatar/3.jpg',
  },
  {
    primary: "Doctor's Appointment",
    secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
    person: '/static/images/avatar/4.jpg',
  },
  {
    primary: 'Discussion',
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Summer BBQ',
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: '/static/images/avatar/1.jpg',
  }];


export default MainPage
