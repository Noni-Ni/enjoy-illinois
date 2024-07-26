export default function HomeSection() {
    return (
        <div>
            <div>
                <h1>Explore Illinois</h1>
                <p>From urban excitement and outdoor adventures to delicious food and fascinating history, Illinois is an iconic destination with something for everyone. Scroll through the regions to explore the diversity of experiences in The Middle of Everything.
                </p>
            </div>
            <div className="content-home">
                <div className="recent">
                    <h3>Most recent post</h3>
                    <article>
                        <img src="/images/susanne-preisinger-9GGMSGhsMk8-unsplash.jpg" alt="lake" />
                        <section>
                            <h3>Card Title</h3>
                            <p>Lorem ipsum dolor sit inventore eaque fugit ex porro totam perspiciatis molestiae corporis. Odio!</p>
                        </section>
                        <footer><a href="">Read more..</a></footer>
                    </article>
                </div>
                <div className="loved">
                    <h3>Most loved one</h3>
                    <article>
                        <img src="/images/susanne-preisinger-9GGMSGhsMk8-unsplash.jpg" alt="lake"/>
                            <section>
                                <h3>Card Title</h3>
                                <p>Lorem ipsum dolor sit inventore eaque fugit ex porro totam perspiciatis molestiae corporis. Odio!</p>
                            </section>
                            <footer><a href="">Read more..</a></footer>
                    </article>
                </div>
            </div>
        </div>
    )
}