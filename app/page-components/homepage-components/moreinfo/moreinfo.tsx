import Link from 'next/link';
import './moreinfo.css';

const MoreInfo = () => {
  return (
    <section className="more-info-container">
      <h1 className="more-info-title">Want to learn more?</h1>
      <div className="cards-container">
        <Link href="/skills" className="card">
          <h2 className="card-title">Skills</h2>
        </Link>
        
        <Link href="/projects" className="card">
          <h2 className="card-title">Projects</h2>
        </Link>
        
        <Link href="/contact" className="card">
          <h2 className="card-title">Contact</h2>
        </Link>
      </div>
    </section>
  );
};

export default MoreInfo;