import { Link } from "react-router-dom";

export default function PostCard(
    {
        _id,
        title,
        address,
        imageUrl,
        text,
        _ownerId,
        _createdOn
    }
) {
    return (
        <article>
            <img src={imageUrl} alt="lake" />
            <section>
                <h3>{title}</h3>
                <p>{address}</p>
            </section>
            <footer><Link to={`/catalog/${_id}`}>Read more..</Link></footer>
        </article>
    )
}