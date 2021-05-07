import "../styles/main.scss";

const DataSection = ({ title, children }) => {
    return (
        <div title="dataSection" className="dataSection">
            <h2 className="dataSection__title">{title}</h2>
            <ul className="dataSection__list">{children}</ul>
        </div>
    );
};

export default DataSection;
