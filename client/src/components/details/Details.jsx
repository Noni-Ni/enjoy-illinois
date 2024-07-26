import styles from './Details.module.css'

export default function Details() {
    return (
        <div>
            <article className={styles.details}>
                <img src="https://images.unsplash.com/photo-1610049065661-6a77e2f89d36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="lake" />
                <section>
                    <div className={styles.title}>
                        <h2>Card Title</h2>
                        <a href="">Like me <i className="fas fa-heart"></i></a>
                    </div>

                    <p ><i className="far fa-compass"></i> 60007 Illinois</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima consequuntur possimus quo enim eveniet, deserunt ducimus doloremque laudantium iure, ut inventore eaque fugit ex porro totam perspiciatis molestiae corporis. Odio!</p>
                    <p className={styles.author}>author</p>

                    <div className={styles.action}>
                        <a href="">Edit</a>
                        <a href="">Delete</a>
                    </div>
                </section>

            </article>
        </div>
    )
}