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

function MainPage() {
  
  const [value, setValue] = useState(0);
  const ref = useRef(null); // Define the ref here
  const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpen2 = () => {
    window.open('https://www.instagram.com/cheeze.s3/?igshid=NTc4MTIwNjQ2YQ%3D%3D', '_blank');
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
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="ทำความรู้จักพี่ขีส" onClick={handleOpen} icon={<PetsIcon />} />
            <BottomNavigationAction label="IG พี่ชีส" onClick={handleOpen2} icon={<FavoriteIcon />} />
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
      
    </>
  );
}



export default MainPage
