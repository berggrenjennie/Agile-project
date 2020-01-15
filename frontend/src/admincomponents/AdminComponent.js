//core functionality from react.
import React, { Component } from 'react';
import axios from 'axios';

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
import IconButton from '@material-ui/core/IconButton';
import BackspaceIcon from '@material-ui/icons/Backspace';
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
  },
  iconButton:{
    color:'#908393',
  }
});

/*with this component the adminuser can see all the products, including facts, in a table*/
class AdminComponent extends Component {
  constructor(){
    super();
    this.state = {
      page: 0,
      rowsPerPage: 10,
      isRemove:false,
      uppdateProducts:[],
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

  /*A method which deletes a product from the database by using the delete method.*/
  removeProduct(id) {
    axios.delete ('http://localhost:2000/products/' + id)
      .then(response => {
        // console.log('Success:', JSON.stringify(response));
      })
      .catch(error => console.error('Error:', error));
      this.setState({
        isRemove:true,
      });
      axios.get('http://localhost:2000/products')
        .then(response => {
          this.setState({
            uppdateProducts:response.data
          });
        })
  }
  render() {
    const { rowsPerPage, page , isRemove , uppdateProducts } = this.state;
    const { classes, productsData } = this.props;
    let products=[];
    if (isRemove){
      products=uppdateProducts;
    }else {
      products= productsData;
    }
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.firstRow} align='center'>Id</TableCell>
                <TableCell className={classes.firstRow} align='center'>Produktnamn</TableCell>
                <TableCell className={classes.firstRow} align='center'>Kategori</TableCell>
                <TableCell className={classes.firstRow} align='center'>Underkategori 1</TableCell>
                <TableCell className={classes.firstRow} align='center'>Produktinformation</TableCell>
                <TableCell className={classes.firstRow} align='center'>Material</TableCell>
                <TableCell className={classes.firstRow} align='center'>Storlek</TableCell>
                <TableCell className={classes.firstRow} align='center'>Färg</TableCell>
                <TableCell className={classes.firstRow} align='center'>Price</TableCell>
                <TableCell className={classes.firstRow} align='center'>Imagepath</TableCell>
                <TableCell className={classes.firstRow} align='center'>Rea</TableCell>
                <TableCell className={classes.firstRow} align='center'>Procent</TableCell>
                <TableCell className={classes.firstRow} align='center'>Ta bort</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data, index) => {
                return (
                <TableRow className='evenColor' key={index}>
                  <TableCell className={classes.border} align='center'>{index+1}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.name}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.category}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.subCategory1}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.description}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.material}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.size}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.color}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.price+' kr'}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.imagePath}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.isSale? "Rea" : "Not Rea"}</TableCell>
                  <TableCell className={classes.border} align='center'>{data.salePercent+' %'}</TableCell>
                  <TableCell className={classes.border} align='center'>
                    <IconButton className={classes.iconButton} onClick={(e) => this.removeProduct(data._id, e)}>
                      <BackspaceIcon/>
                    </IconButton>
                  </TableCell>
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
