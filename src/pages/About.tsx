import Navbar from "../components/Navbar";
const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: "'Georgia', serif" }}>
          About Rwanda Forensic Institute
        </h1>
        <div className="prose prose-neutral max-w-none space-y-4 text-muted-foreground">
          <p>
            The <strong className="text-foreground">Rwanda Forensic Institute (RFI)</strong> was established by Presidential Order N° 049/01 of 02/08/2023 to support the judicial system through forensic science services. Its motto — <em>"Science For Justice"</em> — reflects its commitment to evidence-based justice.
          </p>
          <p>
            Forensic services in Rwanda began with the Kigali Forensic Laboratory (KFL), set up in 2005 by the Rwanda National Police in partnership with the National Public Prosecution Authority. RFI has since grown into a state-of-the-art institution offering specialized services across multiple forensic disciplines.
          </p>
          <h2 className="text-xl font-bold text-foreground mt-8">Our Services</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-foreground">Biology / DNA Forensic Service</strong> — Serological examinations and DNA profiling</li>
            <li><strong className="text-foreground">Drug & Chemistry Service</strong> — Qualitative and quantitative chemical examination</li>
            <li><strong className="text-foreground">Forensic Toxicology</strong> — Detection of drugs, poisons, and alcohol in specimens</li>
            <li><strong className="text-foreground">Digital Forensics</strong> — Computer, mobile, and network investigations</li>
            <li><strong className="text-foreground">Crime Scene Investigation</strong> — Evidence collection and scene processing</li>
          </ul>
          <h2 className="text-xl font-bold text-foreground mt-8">E-Learning Mission</h2>
          <p>
            Our e-learning platform extends RFI's training mandate by providing accessible, professional forensic science education to law enforcement officers, prosecutors, judges, and aspiring forensic scientists across Rwanda and the African continent.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
