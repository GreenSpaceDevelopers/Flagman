import { FC, ReactNode } from 'react';
import './MyFormInfoAlert.css';

interface MyFormInfoAlertProps {
    children: ReactNode;
}

const MyFormInfoAlert: FC<MyFormInfoAlertProps> = ({ children }) => {
    return (
        <div className='MyFormInfoAlert'>
            {children}
        </div>
    );
};

export default MyFormInfoAlert;
