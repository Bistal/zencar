import React, { useEffect, useState} from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import withWidth from '@material-ui/core/withWidth';
import { contentPadding } from '../../utils/styles';
import { Typography, Table, TableRow, TableHead, TableBody, TableCell, TablePagination, Input } from '@material-ui/core';
import { getFiles } from '../../actions/files';
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

export function Files() {


    const classes = styles();
    const dispatch = useDispatch();
    const appfiles = useSelector((state) => state.files.files.result);
    const appusers = useSelector((state) => state.users.users.result);
    const [searchValue, setSearchValue] = useState("");
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(3);

    useEffect(() => {
      dispatch(getFiles());
  
    }, [dispatch])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

    const tableRowCount = (appfiles && appfiles.length) || 0;

    let getObjByName = {};
    
    let filterFiles = appfiles || [];
    if(appusers && appusers.length && searchValue) {
        getObjByName = appusers.find(user => user.givenName.toLowerCase().includes(searchValue.toLowerCase()))
        
        if (getObjByName) {
            filterFiles = appfiles.filter(file => (file.modifiedBy == getObjByName.id) || (file.createdBy == getObjByName.id))
        }
    } 

	return (
		<div className={classes.content}>
            
        <div style={{display: 'flex', justifyContent: 'space-between'}}>

            <Typography variant="h2"> Files </Typography>

            <Input 
                placeholder="Search By Name"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
            />
        </div>

        <Table>
            <TableHead > 
            <TableRow style={{ backgroundColor: '#f0f0fe'}} > 
                <TableCell>File Name</TableCell>
                <TableCell>Created By</TableCell>
                <TableCell>Last Modified By</TableCell>
                <TableCell>Type</TableCell>
            </TableRow>
            </TableHead>
                
            <TableBody>

            {filterFiles.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((file) => {

                const userThatChanged = appusers.find(u => u.id == file.modifiedBy).givenName
                const userThatCreated = appusers.find(u => u.id == file.createdBy).givenName
                
                return <TableRow>
                            <TableCell>{file.title}</TableCell>
                            <TableCell>{userThatCreated}</TableCell>
                            <TableCell>{userThatChanged}</TableCell>
                            <TableCell>{file.type}</TableCell>
                </TableRow>
            })}
            </TableBody>
        </Table>

        <TablePagination
        rowsPerPageOptions={[3, 5, 10]}
        component="div"
        count={filterFiles.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
		</div>
	);
}


export default  withWidth()(Files);
