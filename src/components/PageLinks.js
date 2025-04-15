import {pageLinks} from "../data";

const PageLinks = ({ulClassName, ulId, aClassName}) => {
    return (
        <ul className={ulClassName} id={ulId}>
            {pageLinks.map((link) => {
                return (
                    <li key={link.id}>
                        <a href={link.url} className={aClassName}>{link.text}</a>
                    </li>
                );
            })}
        </ul>
    );


}

export default PageLinks;