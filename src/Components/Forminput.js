import React, { Component } from 'react'
import {TextField} from '@material-ui/core'
export default class Forminput extends Component {
    render() {
        return (
            <form noValidate autoComplete="off">
            <TextField 
                   error = {this.handleValidate}
                   style={{width:"70%"}}
                    required
                    id= {this.props.id}
                    type={this.props.type}
                    label= {this.props.label}
                    placeholder= {this.props.placeholder}
                    color="primary"
                    helperText={this.props.helpertext}/>
            </form>
        )
    }
}
