//core functionality from react.
import React, { Component } from 'react';

//core functionality from material-ui.
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//existing component imports.
import TablePaginationActions from './TablePaginationActions';

//material-ui styling stuff.
const styles = theme => ({
  root: {
    margin: 10,
    marginTop: 9,
    overflowX: 'auto',
  },
  table: {
    maxWidth: '100em',
    color:'#505050'
  },
  firstRow: {
    border: '1px solid #DECCCA',
    backgroundColor: '#908393',
    color: '#FFF5EE',
    fontSize: 16
  },
  border: {
    border: '1px solid #DECCCA'
  }
});

class AdminComponent extends Component {
  constructor(){
    super();
    this.state = {
      page: 0,
      rowsPerPage: 10
    }
  }

  //handeles all the input field data changes from form and updates the states.
  handleInputChange = field => event => {
    const state = {};
    state[field] = event.target.value;
    this.setState(state);
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({
      page: 0,
      rowsPerPage: parseInt(event.target.value, 10)
    });
  };

  render() {
    const { rowsPerPage, page } = this.state;
    const { classes, productsData } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.firstRow} align='center'>Id</TableCell>
                <TableCell className={classes.firstRow} align='center'>Product name</TableCell>
                <TableCell className={classes.firstRow} align='center'>Category</TableCell>
                <TableCell className={classes.firstRow} align='center'>subCategory1</TableCell>
                <TableCell className={classes.firstRow} align='center'>subCategory2</TableCell>
                <TableCell className={classes.firstRow} align='center'>Description</TableCell>
                <TableCell className={classes.firstRow} align='center'>Brand</TableCell>
                <TableCell className={classes.firstRow} align='center'>Material</TableCell>
                <TableCell className={classes.firstRow} align='center'>Size</TableCell>
                <TableCell className={classes.firstRow} align='center'>Color</TableCell>
                <TableCell className={classes.firstRow} align='center'>Price</TableCell>
                <TableCell className={classes.firstRow} align='center'>imagePath</TableCell>
                <TableCell className={classes.firstRow} align='center'>Rea</TableCell>
                <TableCell className={classes.firstRow} align='center'>Rea price</TableCell>
                <TableCell className={classes.firstRow} align='center'>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data, index) => {
                return (
                <TableRow className='evenColor' key={index}>
                  <TableCell className={classes.border} align='center'>{data._id}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.name}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.category}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.subCategory1}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.subCategory2}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.description}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.brand}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.material}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.size}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.color}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.price}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.imagePath}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.isRea? "Rea" : "Not Rea"}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.reaPrice}</TableCell>
                  <TableCell className={classes.border} align='center'>{"delete"}</TableCell>
                </TableRow>
                )
                })
              }
            </TableBody>
            <TableFooter>
              <TableRow >
                  <TablePagination style={{color: '#908393'}} rowsPerPageOptions={[10, 20, 30]} count={productsData.length} rowsPerPage={rowsPerPage}
                  page={page} SelectProps={{native: true}} onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage} ActionsComponent={TablePaginationActions}/>
              </TableRow>
            </TableFooter>
          </Table>
        </Paper>
      </div>
    )
  }
}
export default withStyles(styles)(AdminComponent);
