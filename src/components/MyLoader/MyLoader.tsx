import { FC } from 'react';
import './MyLoader.css';

interface MyLoaderProps {
    size?: string;
    marginVertical?: string;
    marginEdges?: string;
    border?: string;
    color?: string;
    width?: string;
    height?: string
    animationTimingFunction?: string;
}

const MyLoader: FC<MyLoaderProps> = ({ size, marginVertical, marginEdges, border, color, width, height, animationTimingFunction }) => {
    const styles = {
        ...(size && { height: `${size}`, width: `${size}` }),
        ...(marginVertical && { marginTop: `${marginVertical}`, marginBottom: `${marginVertical}` }),
        ...(marginEdges && { marginLeft: `${marginEdges}`, marginRight: `${marginEdges}` }),
        ...(border && { borderWidth: `${border}` }),
        ...(color && { borderColor: `${color}` }),
        ...(width && { width: `${width}` }),
        ...(height && { height: `${height}` }),
        ...(animationTimingFunction && { animation: `spin 1s ${animationTimingFunction || 'linear'} infinite` }),
    };
    
    return (
        <div className='myLoader' style={styles}></div>
    );
};

export default MyLoader;
