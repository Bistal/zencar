import React, { useEffect} from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import withWidth from '@material-ui/core/withWidth';
import { contentPadding } from '../../utils/styles';
import { Typography, List, ListItem, Table, TableRow, TableHead, TableBody, TableCell, TableContainer } from '@material-ui/core';
import { getUsers } from '../../actions/users';
import { useDispatch, useSelector } from 'react-redux';

const styles = makeStyles((theme) => ({
	content: {
		
        paddingTop: 35,
		paddingLeft: contentPadding,
		paddingRight: contentPadding,
		[theme.breakpoints.down('lg')]: {
			paddingLeft: theme.spacing(3),
			paddingRight: theme.spacing(3),
		},
		[theme.breakpoints.down('md')]: {
			paddingLeft: theme.spacing(0),
			paddingRight: theme.spacing(0),
		},
	}
}));

export function Users() {


    const classes = styles();
    const dispatch = useDispatch();
    const appusers = useSelector((state) => state.users.users.result);

    useEffect(() => {
      dispatch(getUsers());
  
    }, [dispatch])

	return (
		<div className={classes.content}>
            
        <Typography variant="h2"> Users </Typography>

        <TableContainer style={{ maxHeight: 240 }}>
            <Table>
                <TableHead> 
                <TableRow style={{ backgroundColor: '#fef0f0'}}> 
                    <TableCell>ID</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                </TableRow>
                </TableHead>
                    
                <TableBody>

                {appusers && appusers.map((user) => {
                    
                    return <TableRow>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.givenName}</TableCell>
                                <TableCell>{user.familyName}</TableCell>
                    </TableRow>
                })}
                </TableBody>
            </Table>
        </TableContainer>
		</div>
	);
}


export default  withWidth()(Users);
