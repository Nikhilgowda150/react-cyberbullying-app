import React from "react";

function LawsPage() {
  return (
    <div>
     

      {/* Main Content */}
      <main>
        <section id="laws" className="container py-5">
          <h2>Indian Laws</h2>
          <p>Below is a comprehensive list of important Indian laws:</p>
          <ul>
            <li>
              <strong>Information Technology Act, 2000</strong>
              <ul>
                <li><strong>Section 66:</strong> Computer-related offenses.</li>
                <li><strong>Section 66A:</strong> Sending offensive messages through communication service (invalidated in 2015).</li>
                <li><strong>Section 66B:</strong> Punishment for dishonestly receiving stolen computer resources.</li>
                <li><strong>Section 66C:</strong> Identity theft.</li>
                <li><strong>Section 66E:</strong> Violation of privacy.</li>
                <li><strong>Section 67:</strong> Publishing or transmitting obscene material.</li>
                <li><strong>Section 67A:</strong> Publishing or transmitting sexually explicit acts.</li>
                <li><strong>Section 67B:</strong> Publishing or transmitting children’s sexual material.</li>
                <li><strong>Section 70:</strong> Power to issue directions for interception or monitoring.</li>
                <li><strong>Section 71:</strong> Misrepresentation.</li>
                <li><strong>Section 72:</strong> Breach of confidentiality and privacy.</li>
                <li><strong>Section 72A:</strong> Disclosure of information in breach of lawful contract.</li>
              </ul>
            </li>
            <li>
              <strong>Indian Penal Code, 1860</strong>
              <ul>
                <li><strong>Section 499:</strong> Defamation.</li>
                <li><strong>Section 500:</strong> Punishment for defamation.</li>
                <li><strong>Section 506:</strong> Punishment for criminal intimidation.</li>
                <li><strong>Section 507:</strong> Criminal intimidation by anonymous communication.</li>
                <li><strong>Section 354D:</strong> Stalking.</li>
                <li><strong>Section 509:</strong> Word, gesture, or act intended to insult the modesty of a woman.</li>
                <li><strong>Section 292:</strong> Sale of obscene books, etc.</li>
                <li><strong>Section 294:</strong> Obscene acts and songs.</li>
              </ul>
            </li>
            <li>
              <strong>Protection of Children from Sexual Offences Act, 2012 (POCSO)</strong>
              <ul>
                <li>Addresses online sexual exploitation of children.</li>
              </ul>
            </li>
            <li>
              <strong>The Juvenile Justice (Care and Protection of Children) Act, 2015</strong>
              <ul>
                <li>Provides protection against abuse for minors.</li>
              </ul>
            </li>
            <li>
              <strong>The Right to Information Act, 2005</strong>
              <ul>
                <li>Allows individuals to request information from public authorities.</li>
              </ul>
            </li>
            {/* Add more sections as required */}
          </ul>
        </section>
      </main>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Cyberbullying Support. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LawsPage;
