import React, { Component } from 'react';

import "./Style.css";
// import ImageGridList from "./Image";

import { browserHistory } from "react-router";
import "./Style.css";
import { makeStyles } from "@material-ui/core/styles";
//import Button from '@material-ui/core/Button';
// import { UserContext } from "./Context";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuList from "@material-ui/core/MenuList";
import Note from './Note';

export default class Home extends Component {

  
    render() {
        return (
            <div>
        <div className="split1 left1">
          {/* <ImageGridList
            // onPassImage={updateImage}
            // onUploadImage={onUploadImage}
          />{" "} */}
        </div>

        <div className="split1 right1" style={{ backgroundColor: "#8A2BE2" }}>
          <IconButton
            style={{
              color: "#FFFFFF",
              float: "right",
              marginRight: "2%",
              marginTop: "2%",
            }}
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            // onClick={handleClick}
          >
            {/* <MoreVertIcon /> */}
          </IconButton>
          <Menu
            id="long-menu"
            // anchorEl={anchorEl}
            keepMounted
            // open={open}
            // onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight:  4.5,
                width: "20ch",
              },
            }}
          >
            <MenuList style={{ backgroundColor: "#FFFFFF" }}>
              <MenuItem >View All Post</MenuItem>
              <MenuItem >Logout</MenuItem>
            </MenuList>
          </Menu>
          <Note  />
        </div>
      </div>
        )
    }
}
