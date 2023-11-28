import '../index.css';

function Connect() {
    return(
        <div className="
        bg-white
        bottom-0
        absolute 
        items-start
        gap-5 
        left-0
        inline-flex"
        style={{
            width: '100vw',
            height: '10vh'
        }}>
            <div className="
            left-4
            top-4
            absolute">
                <a href="https://www.linkedin.com/in/shiyu81/" target="_blank">
                    <img className="w-12 h-12" src="src/public/icons/icons8-linked-in-100.png"/>
                </a>
            </div>
            <div className="
            left-20
            top-4
            absolute">
                <a href="https://github.com/sl-81" target="_blank">
                    <img className="w-12 h-12" src="src/public/icons/icons8-github-96.png" />
                </a>
            </div>
            <div className="
            left-36
            top-4
            absolute">
                <a href="https://www.instagram.com/ssssshiyuu/" target="_blank">
                        <img className="w-12 h-12" src="src/public/icons/icons8-instagram-100.png" />
                </a>
            </div>
            <div className="
            left-52
            top-4
            absolute">
                <a href="mailto: shiyu.li.1109@gmail.com" target="_blank">
                    <img className="w-12 h-12" src="src/public/icons/icons8-mail-100.png" />
                </a> 
            </div>

        </div>
    );
}

export default Connect