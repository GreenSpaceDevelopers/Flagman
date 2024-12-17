import './Alert.css';
import { FC, ReactNode, useEffect } from 'react';

interface AlertModalProps {
    children: ReactNode;
    visible: boolean;
    setVisible: (visible: boolean) => void;
    autoCloseTime?: number;
}

const AlertModal: FC<AlertModalProps> = ({ children, visible, setVisible, autoCloseTime = 3000 }) => {
    const rootClasses = ['myAlert'];

    if (visible) {
        rootClasses.push('active');
    }

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, autoCloseTime);

            return () => clearTimeout(timer);
        }
    }, [visible, autoCloseTime, setVisible]);

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className="myAlertContent" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default AlertModal;