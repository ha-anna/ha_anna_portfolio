import '../app/global.css'
import Nav from '../app/components/Nav'

export default function Custom404() {
  return (
    <main>
      <Nav />
      <div className="error">
        <h2>404 - Page Not Found</h2>
        <p>The requested page could not be found.</p>
        <a href="https://haanna.com" className="btn">Go to haanna.com</a>
      </div>
    </main>
  );
}