import React from 'react';
import { useUserContext } from '../../../../../packages/peregrine/lib/context/user';
import { Redirect } from 'react-router-dom';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './comments.module.css';


const Comments = () => {

    const [{ isSignedIn }] = useUserContext();

    const classes = useStyle(defaultClasses);

    if (!isSignedIn) {
        return <Redirect to={'/'}/>      
    }

    return (
        <div className={classes.main}>
            <h1>HELLO</h1>
        </div>
    );
}
export default Comments;
