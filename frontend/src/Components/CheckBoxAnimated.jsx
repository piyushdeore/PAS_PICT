import { Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import React, { Component } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import './CheckBoxAnimated.css';

class Checkbox extends Component {
    // this.handleClick = this.handleClick.bind(this);
    
    handleClick(){
        this.props.handleClick(this.props.itr);
    }


    render() {
        return (
            <div>
                {
                    !(this.props.arr[this.props.itr])?
                    (
                        <motion.div
                            animate={{
                                transform:['rotate(360deg)','rotate(-360deg)','rotate(0deg)'],
                            }}
                            transition={{
                                duration:1
                            }}
                        >
                            <Button
                                style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px',border:'1px solid black'}}
                                onClick={()=>this.handleClick()}
                                className="check-box"
                            >
                            </Button>
                        </motion.div>
                    ) : 
                    (
                        <motion.div 
                                onClick={()=>this.handleClick()}
                                initial={{
                                    transform:'rotate(0deg)',
                                }}
                                animate={{
                                    transform:['rotate(360deg)','rotate(-360deg)','rotate(0deg)'],
                                }}
                                transition={{
                                    duration:1
                                }}
                            >
                            <IconButton className="checkicon">
                                <CheckIcon style={{color:'#E9A630'}}/>
                            </IconButton>
                        </motion.div>
                    )
                }
            </div>
            );     
    }
}

export default Checkbox;