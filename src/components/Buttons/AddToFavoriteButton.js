import React, {useCallback, useContext, useState} from 'react';
import './Buttons.scss'
import Tooltip from "@material-ui/core/Tooltip";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import {LaunchesContext} from "../../context/launches";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddToFavoriteButton = ({launch, favoriteLaunchesList}) => {

    const {setFavoriteLaunchesList} = useContext(LaunchesContext);

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleAddToFavorites = useCallback(launch => {
        setFavoriteLaunchesList(prevLaunches => {
            return [...new Set([...prevLaunches, launch])]
        })
        setOpenSnackbar(true);
    }, [favoriteLaunchesList]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <div>
            <Tooltip title="Add to favorites" arrow>
                <button className="add-to-favorites-button" onClick={() => {handleAddToFavorites(launch)}}>
                    <i className="fa fa-star"></i>
                </button>
            </Tooltip>
            <Snackbar open={openSnackbar} autoHideDuration={6000}
                      message="Launch added to favorites successfully!"
                      onClose={handleClose}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                      action={
                          <>
                              <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                  <CloseIcon fontSize="small" />
                              </IconButton>
                          </>
                      } />
        </div>
    );
};

export default AddToFavoriteButton;