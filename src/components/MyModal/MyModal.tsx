import { FC, ReactNode, useRef, useState, useEffect } from 'react';
import './MyModal.css';

interface MyModalProps {
    children: ReactNode;
    visible: boolean;
    setVisible: (visible: boolean) => void;
    backgroundColor?: string;
}

const MyModal: FC<MyModalProps> = ({ children, visible, setVisible, backgroundColor }) => {
    const [isClosing, setIsClosing] = useState(false);
    const rootClasses = ['myModal'];
    const modalContentRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (visible) {
            setIsClosing(false);
        }
    }, [visible]);
    
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setVisible(false);
            setIsClosing(false);
        }, 300);
    };
    
    if (visible || isClosing) {
        rootClasses.push('active');
    }
    if (isClosing) {
        rootClasses.push('closing');
    }
    
    const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
        if (modalContentRef.current && !modalContentRef.current.contains(event.target as Node)) {
            handleClose();
        }
    };
    
    return (
        <div className={rootClasses.join(' ')} onMouseDown={handleClickOutside}>
            <div
                className="myModalContent"
                ref={modalContentRef}
                onMouseDown={(e) => e.stopPropagation()}
                style={{ backgroundColor: `${backgroundColor || 'transparent'}` }}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;