import React, { useEffect} from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import withWidth from '@material-ui/core/withWidth';
import { contentPadding } from '../../utils/styles';
import { Typography, Table, TableRow, TableHead, TableBody, TableCell } from '@material-ui/core';
import { getTypes } from '../../actions/types';
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

export function Types() {


    const classes = styles();
    const dispatch = useDispatch();
    const apptypes = useSelector((state) => state.types.types.result);

    useEffect(() => {
      dispatch(getTypes());
  
    }, [dispatch])

	return (
		<div className={classes.content}>
            
        <Typography variant="h2"> Types </Typography>

        <Table>
            <TableHead > 
            <TableRow style={{ backgroundColor: '#f0fef0'}}> 
                <TableCell>ID</TableCell>
                <TableCell>Documents No</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Name</TableCell>
            </TableRow>
            </TableHead>
                
            <TableBody>

            {apptypes && apptypes.map((type) => {
                
                return <TableRow>
                            <TableCell>{type.id}</TableCell>
                            <TableCell>{type.documentsCount}</TableCell>
                            <TableCell>{type.description}</TableCell>
                            <TableCell>{type.name}</TableCell>
                </TableRow>
            })}
            </TableBody>
        </Table>
		</div>
	);
}


export default  withWidth()(Types);
