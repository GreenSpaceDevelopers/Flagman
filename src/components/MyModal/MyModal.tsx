import React, { FC, ReactNode } from 'react';
import './MyModal.css';

interface MyModalProps {
    children: ReactNode;
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

const MyModal: FC<MyModalProps> = ({ children, visible, setVisible }) => {
    const rootClasses = ['myModal'];
    
    if (visible) {
        rootClasses.push('active');
    }
    
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className="myModalContent" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;
