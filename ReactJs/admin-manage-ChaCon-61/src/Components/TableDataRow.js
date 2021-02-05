import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if(this.props.permission === 1){
            return 'Admin';
        }else if(this.props.permission === 2){
            return 'Moderator';
        }else {
            return 'Normal';
        }
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div className="btn btn-warning mr-2 sua"><i className="fa fa-edit">Sửa</i></div>
                    <div className="btn btn-danger xoa"><i className="fas fa-trash-alt"> Xóa</i></div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;