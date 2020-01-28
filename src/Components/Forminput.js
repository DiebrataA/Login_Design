import React, { Component } from 'react'
import {TextField} from '@material-ui/core'
export default class Forminput extends Component {
    render() {
        return (
            <TextField 
                   style={{width:"70%" , marginBottom: 30}}
                    required
                    id= {this.props.id}
                    type={this.props.type}
                    label= {this.props.label}
                    placeholder= {this.props.placeholder}
                    color="primary"/>
        )
    }
}
