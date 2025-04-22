import style from"./Footer.module.css"
function Footer(){
    return(
        <footer  classsNames={styles.footer}>
            <p>&copy; {new Date(). getFullYear()} programação. Todos os direitos reservados.</p>



          
        </footer>

    );
}

export default Footer;