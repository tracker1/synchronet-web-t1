
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailMenuIcon from '@mui/icons-material/MailOutlined';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import ChatIcon from '@mui/icons-material/ChatOutlined';
//import ForumIcon from '@mui/icons-material/ForumOutline';
import ForumIcon from '@mui/icons-material/NoteAltOutlined';
import FileIcon from '@mui/icons-material/FolderSharedOutlined';
import DoorIcon from '@mui/icons-material/VideogameAssetOutlined';
import SystemIcon from '@mui/icons-material/SettingsSuggestOutlined';
import { useNavigationActions } from '../router';

const drawerWidth = 240;

const SideMenu: React.FC<{ sectionMenu?: any }> = ({ sectionMenu }) => {
  const { push } = useNavigationActions();

  return (
    <Box sx={{
      display: 'flex',
      width: drawerWidth,
      zIndex: (theme) => theme.zIndex.drawer,
    }}>
      <Drawer
        variant="permanent"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          width: '100%',
          backgroundColor: (theme) => theme.palette.background.paper,
          [`& > .MuiDrawer-paper`]: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'unset',
            height: 'auto',
            alignItems: 'stretch'
          },
        }}
      >
        <Box>
          {sectionMenu && (
            <>
              {sectionMenu}
              < Divider />
            </>
          )}
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => push('/main')}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Main" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => push('/email')}>
                <ListItemIcon>
                  <MailMenuIcon />
                </ListItemIcon>
                <ListItemText primary="Email" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => push('/chat')}>
                <ListItemIcon>
                  <ChatIcon />
                </ListItemIcon>
                <ListItemText primary="Chat" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => push('/forum')}>
                <ListItemIcon>
                  <ForumIcon />
                </ListItemIcon>
                <ListItemText primary="Forum" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => push('/file')}>
                <ListItemIcon>
                  <FileIcon />
                </ListItemIcon>
                <ListItemText primary="Files" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => push('/door')}>
                <ListItemIcon>
                  <DoorIcon />
                </ListItemIcon>
                <ListItemText primary="Doors" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => push('/system')}>
                <ListItemIcon>
                  <SystemIcon />
                </ListItemIcon>
                <ListItemText primary="System" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideMenu;