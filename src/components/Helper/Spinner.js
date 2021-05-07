const Spinner = ({ size, styles }) => {
    return (
        <div style={{
            ...styles,
            width: `${size}rem`,
            height: `${size}rem`
        }} className="lds-ring">
            {[0,1,2,4].map(el => (
                <div
                    style={{
                        width: `${size}rem`,
                        height: `${size}rem`
                    }}
                />
            ))}

        </div>
    );
};

export default Spinner;
