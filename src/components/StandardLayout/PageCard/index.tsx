import styles from "./styles.module.css"

interface PageCardInterface {
    type: string
    children: React.ReactNode,
}
const PageCard = ({type, children} : PageCardInterface) => {
    return type === 'title' ? 
        <div className={`${styles.title} bg-gradient`}>
            {children}
        </div> :
        <div className={`${styles.container} bg-gradient`}>
            {children}
        </div>
    
}

export default PageCard;