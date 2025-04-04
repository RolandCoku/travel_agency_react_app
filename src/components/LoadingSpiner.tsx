type LoadingSpinnerProps = {
    color?: string;
    width?: string;
    height?: string;
    borderWidth?: string;
}

const LoadingSpinner = ({ 
    color = '#2891ff', 
    width = '50px', 
    height = '50px',
    borderWidth = '5px'
}: LoadingSpinnerProps) => {
    return (
        <div className="loading-spinner">
            <div 
                className="spinner" 
                style={{ 
                    borderColor: `${color} ${color} ${color} transparent`,
                    width: width,
                    height: height,
                    borderWidth: borderWidth,
                }}
            />
        </div>
    );
}

export default LoadingSpinner;


