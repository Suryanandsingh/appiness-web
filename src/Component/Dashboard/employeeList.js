import React, { Component } from 'react';
import PropsType from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { autoLogout } from '../../Redux/action/authentication';
import { getEmployeeDeatils } from '../../Redux/action/dashboard';
import '../../Styles/styles.css';

class EmployeeList extends Component{
    async componentDidMount(){
        document.title = 'Employee details | Appiness'
        await this.props.getEmployeeDeatils(this.props.history);
    }
    _dataContent(key, value){
        return(
            <div className="employee-details-view">
                <h4>{key}</h4>
                <h4>{value}</h4>
            </div>
        )
    }
    async _logoutPress(){
        await this.props.autoLogout();
        this.props.history.push('/login');
    }
    _renderContent(details){
        return details.map((data, index)=>{
            return(
                <div key={index} className={"employee-details-container"} >
                    {this._dataContent('Id', data.id)}
                    {this._dataContent('Name', data.name)}
                    {this._dataContent('Age', data.age)}
                    {this._dataContent('Gender', data.gender)}
                    {this._dataContent('Email', data.email)}
                    {this._dataContent('Phone No', data.phoneNo)}
                </div>
            )
        })
    }
    _logout(){
        return(
            <button
                onClick={()=>{this._logoutPress()}}
            >
                Logout
            </button>
        )
    }
    render(){
        const { employeeDetails } = this.props;
        return(
            <div className="employee-container">
                {
                employeeDetails?this._renderContent(employeeDetails):null
                }
                {this._logout()}
            </div>
        )
    }
}

EmployeeList.propsType = {
    employeeDetails: PropsType.object.isRequired
}

const mapStateToProps = (state) =>{
    return{
        employeeDetails: state.Dashboard.employeeDetails,
        isAuthenticated: state.Auth.isAuthenticated,
    }
}

export default withRouter(connect(mapStateToProps, {
    getEmployeeDeatils,
    autoLogout
})(EmployeeList));