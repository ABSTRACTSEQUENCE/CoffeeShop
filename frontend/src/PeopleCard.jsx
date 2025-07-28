export function PeopleCard({ human }) {
  return (
    <article className="testimonial-card">
      <img src={human.avatar}></img>
      <p className="testimonial-text">"{human.comment}"</p>
      <p className="testimonial-author">— {human.name}</p>
    </article>
  );
}
